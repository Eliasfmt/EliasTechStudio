
// src/app/blogs/page.tsx
import Navbar from "@/components/Navbar";
import { sanity } from "@/lib/sanity.client"; 

const query = `*[_type == "blogPost"] | order(publishedAt desc){
  _id, title, slug, publishedAt, body
}`;

export default async function BlogPage() {
  const posts = await sanity.fetch(query);

  type BlogPost = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  // Add other fields if needed
};

  return (
  <>
    <Navbar />
    <main className="min-h-screen bg-gradient-to-r from-blue-900 via-blue-800 to-blue-400 py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-white">Blog</h1>
      <div className="max-w-4xl mx-auto space-y-6">
        {posts.length === 0 && (
          <p className="text-center text-lg text-white">No blog posts found.</p>
        )}
        {posts.map((post: BlogPost) => (
          <div
            key={post._id}
            className="bg-white/80 rounded-xl shadow-md p-6 border hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-bold mb-2 text-gray-900">{post.title}</h2>
            <p className="text-gray-600 text-sm mb-3">
              {new Date(post.publishedAt).toLocaleDateString()}
            </p>
            <a
              href={`/blogs/${post.slug.current}`}
              className="text-blue-600 hover:underline font-medium"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </main>
  </>
);
}
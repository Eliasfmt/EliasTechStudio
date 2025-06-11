
// import Navbar from "@/components/Navbar";
// import { sanity } from '@/lib/sanity.client';

// type BlogPost = {
//   _id: string;
//   title: string;
//   slug: { current: string };
//   publishedAt: string;
//   body: any;
// };

// export default async function BlogPage() {
//   const posts: BlogPost[] = await sanity.fetch(
//     `*[_type == "blogPost"] | order(publishedAt desc){
//       _id, title, slug, publishedAt, body
//     }`
//   );

//     return (
//      <main
//           className="min-h-screen text-white"
//           style={{ background: "linear-gradient(90deg, #181E4D 0%, #1140A6 50%, #51B6F5 100%)"
//           }} > 
    
//           <Navbar />
//     <div className="p-6 text-center">
//       <h1 className="text-3xl font-bold text-red-500 mb-4">Blog Posts Coming Soon!</h1>
//       <p className="text-gray-600">Check back later for our latest preschool tips and updates.</p>
//     </div>
//     </main>

    //      <main className="container mx-auto py-8">
    //   <h1 className="text-3xl font-bold mb-6">Blog</h1>
    //   <div className="space-y-6">
    //     {posts.map(post => (
    //       <article key={post._id} className="p-4 border rounded-lg bg-white">
    //         <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
    //         <p className="text-gray-500 text-sm mb-2">
    //           {new Date(post.publishedAt).toLocaleDateString()}
    //         </p>
    //         {/* Opcional: muestra un resumen o el cuerpo del post */}
    //         {/* <PortableText value={post.body} /> */}
    //         <a href={`/blogs/${post.slug.current}`} className="text-blue-600 hover:underline">
    //           Leer más
    //         </a>
    //       </article>
    //     ))}
    //   </div>
    // </main>
  

//   );
// }


// src/app/blogs/page.tsx
import Navbar from "@/components/Navbar";
import { sanity } from "@/lib/sanity.client"; // or your actual import
// import { groq } from "next-sanity"; // if you use it
import Link from "next/link";

const query = `*[_type == "blogPost"] | order(publishedAt desc){
  _id, title, slug, publishedAt, body
}`;

export default async function BlogPage() {
  const posts = await sanity.fetch(query);

  return (
  <>
    <Navbar />
    <main className="min-h-screen bg-gradient-to-r from-blue-900 via-blue-800 to-blue-400 py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-white">Blog</h1>
      <div className="max-w-4xl mx-auto space-y-6">
        {posts.length === 0 && (
          <p className="text-center text-lg text-white">No blog posts found.</p>
        )}
        {posts.map((post: any) => (
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
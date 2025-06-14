// src/app/blogs/[slug]/page.tsx

// export default async function Page(props: { params: Promise<{ slug: string }> }) {
//   const { slug } = await props.params;
//   return <div>Blog post slug: {slug}</div>;
// }

// export async function generateStaticParams() {
//   return [{ slug: "hello-world" }, { slug: "another-post" }];
// }


import { sanity } from '@/lib/sanity.client';
import { PortableText } from '@portabletext/react';
import Navbar from "@/components/Navbar";
import type { PortableTextComponents } from '@portabletext/react';

// Notice the type for params: Promise<{ slug: string }>
export default async function Page(props: { params: Promise<{ slug: string }> }) {
  // Await params because in Next.js 15+ it's a Promise
  const { slug } = await props.params;

  // Fetch the post from Sanity
  const query = `*[_type == "blogPost" && slug.current == $slug][0]{
    title, body, publishedAt
  }`;

  const post = await sanity.fetch(query, { slug });

  if (!post) {
    return <div>Post not found.</div>;
  }

  const components: PortableTextComponents = {
    block: {
      h1: ({ children }) => <h1 className="text-4xl font-bold my-6">{children}</h1>,
      h2: ({ children }) => <h2 className="text-3xl font-bold my-4">{children}</h2>,
      normal: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
    },
    list: {
      bullet: ({ children }) => <ul className="list-disc pl-6">{children}</ul>,
      number: ({ children }) => <ol className="list-decimal pl-6">{children}</ol>,
    },
    listItem: {
      bullet: ({ children }) => <li className="mb-2">{children}</li>,
    },
    marks: {
      strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
      em: ({ children }) => <em className="italic">{children}</em>,
    },
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-blue-50 py-12 px-4 text-black">
        <h1 className="text-4xl font-extrabold text-black text-center mb-6">{post.title}</h1>
        <p className="mb-8 text-black text-center text-xl">
          {new Date(post.publishedAt).toLocaleDateString()}
        </p>
        <article
          style={{
            fontSize: '1.5rem',
            lineHeight: 1.7,
            maxWidth: '52rem',
            margin: '0 auto',
            color: 'black',
          }}
        >
          <PortableText value={post.body} components={components} />
        </article>
      </main>
    </>
  );
}

export async function generateStaticParams() {
  // Optionally fetch real slugs from Sanity for static generation
  // const slugs = await sanity.fetch(`*[_type == "blogPost"]{ "slug": slug.current }`);
  // return slugs;

  // Hardcoded for demo — replace with the above when ready
  return [{ slug: "hello-world" }, { slug: "another-post" }];
}
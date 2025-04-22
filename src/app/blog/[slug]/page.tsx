// app/blog/[slug]/page.tsx
import { blogArticles } from "../../../data/blogdata";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import rehypePrism from "rehype-prism-plus";
import remarkGfm from "remark-gfm";
import "prismjs/themes/prism-okaidia.css";

// Define the proper type for the props
interface PageProps {
  params: Promise<{ slug: string }>;
}

const BlogPost = async ({ params }: PageProps) => {
  // Await the params promise
  const { slug } = await params;

  // Find the post based on the slug
  const post = blogArticles.find((article) => article.slug === slug);

  if (!post) {
    return <div className="p-10 text-center text-xl text-gray-700">Blog post not found.</div>;
  }

  return (
    <div className="min-h-screen bg-white py-16 px-6 md:px-20 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-4xl font-extrabold text-orange-600 mb-4">{post.title}</h1>

        <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
          <span className="font-medium">{post.date}</span>
          <div className="flex space-x-2">
            {post.tags.map((tag, index) => (
              <span key={index} className="bg-orange-100 px-3 py-1 rounded-full text-orange-600 text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative w-full h-80 mb-6 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={600}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        <div className="prose lg:prose-xl max-w-none text-lg text-gray-700 leading-relaxed mb-8">
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypePrism]}>
            {post.content}
          </ReactMarkdown>
        </div>

        <Link href="/#blog">
          <p className="mt-10 inline-block text-orange-600 hover:underline font-semibold text-lg">← Back to Blogs</p>
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
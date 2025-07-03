"use client";

import Link from "next/link";
import { blogArticles } from "../data/blogdata"; // or define above this component
import Image from "next/image";

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">
          📝 Blogs
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogArticles.map((article, index) => (
            <div
              key={index}
              className="bg-white hover:bg-amber-100 transition duration-300 rounded-2xl shadow-md overflow-hidden border border-orange-200"
            >
              <div className="relative w-full h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-t-2xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-orange-600 mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {article.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">{article.summary}</p>
                <Link href={`/blog/${article.slug}`}>
                  <span className="text-orange-600 font-semibold hover:underline hover:text-orange-700 transition">
                    🔗 Read More
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

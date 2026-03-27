import { getBlogs } from "@/server/blog/action";
import React from "react";
import { BlogCard } from "../components/BlogCard";
import Link from "next/link";

const page = async () => {
  const { blogs: data } = await getBlogs();
  return (
    <>
      <div className="max-w-6xl mx-auto p-6 mt-5">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-slate-400">Latest Blogs</h1>

          <Link
            href="/blog/create"
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-xl font-medium transition-colors shadow-sm flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Create Blog
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data && data.length > 0 ? (
            data.map((item) => (
              <BlogCard
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
              />
            ))
          ) : (
            <div className="col-span-full py-12 text-center border-2 border-dashed border-slate-800 rounded-2xl">
              <h5 className="text-slate-400 font-medium">
                No blogs available at the moment.
              </h5>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default page;

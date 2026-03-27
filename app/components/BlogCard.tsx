import Link from "next/link";
import React from "react";

type BlogCardProps = {
  id: number | string;
  title: string;
  description: string;
};

export const BlogCard = ({ id, title, description }: BlogCardProps) => {
  return (
    <article className="bg-slate-900 border border-slate-800 hover:border-blue-500/50 rounded-2xl p-6 transition-all duration-300 group flex flex-col h-full">
      <span className="text-blue-500 text-xs font-bold tracking-widest uppercase mb-2 block">
        Blog #{id}
      </span>
      <h2 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
        {title}
      </h2>
      <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 grow">
        {description}
      </p>
      <Link href={`/blog/update/${id}`}>
        <div className="mt-6 flex items-center text-blue-500 text-sm font-medium">
          Read article
          <svg
            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      </Link>
      s
    </article>
  );
};

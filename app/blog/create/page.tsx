import { createBlog } from "@/server/blog/action";
import Link from "next/link";

export default function page() {
  return (
    <div className="max-w-3xl mx-auto p-6 mt-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-slate-500">Create New Blog</h1>
        <Link
          href="/blog"
          className="text-slate-400 hover:text-slate-300 text-sm font-medium"
        >
          Cancel
        </Link>
      </div>

      <form
        action={createBlog}
        className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6 shadow-lg"
      >
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            required
            placeholder="Enter blog title..."
            className="w-full bg-slate-800 text-slate-100 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-500 transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">
            Description
          </label>
          <textarea
            name="description"
            rows={8}
            required
            placeholder="Write your blog content here..."
            className="w-full bg-slate-800 text-slate-100 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-500 transition-all resize-y"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3.5 rounded-xl transition-colors shadow-sm"
        >
          Publish Blog
        </button>
      </form>
    </div>
  );
}

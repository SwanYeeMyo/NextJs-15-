import { updateData } from "@/server/action";
import { showBlog, updateBlog } from "@/server/blog/action";
import Link from "next/link";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function UpdatePage({ params }: Props) {
  const { id } = await params;
  const { blog: data } = await showBlog(Number(id));

  if (!data) {
    return (
      <div className="text-center text-slate-400 mt-20">Blog not found</div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 mt-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-slate-100">Edit Blog</h1>
        <Link
          href={`/blog/${data.id}`}
          className="text-slate-400 hover:text-slate-300 text-sm font-medium"
        >
          Cancel
        </Link>
      </div>

      <form
        action={updateBlog}
        className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6 shadow-lg"
      >
        <input type="hidden" name="id" value={data.id} />

        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            defaultValue={data.title}
            required
            className="w-full bg-slate-800 text-slate-100 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">
            Description
          </label>
          <textarea
            name="description"
            defaultValue={data.description}
            rows={8}
            required
            className="w-full bg-slate-800 text-slate-100 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-y"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3.5 rounded-xl transition-colors shadow-sm"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

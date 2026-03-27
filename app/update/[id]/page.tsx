import { showData, update, updateData } from "@/server/action";
import React from "react";
type props = {
  params: Promise<{
    id: string;
  }>;
};

const page = async ({ params }: props) => {
  const { id: paramId } = await params;

  const { data } = await showData(Number(paramId));

  if (!data) {
    return <div>Data not found.</div>;
  }
  const { id, title } = data;

  return (
    <>
      <div>
        <h5>This is Todo Update {paramId}</h5>
        <h5>{id}</h5>
        <h5>{title}</h5>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <form action={updateData} className="flex gap-3">
            <input type="hidden" name="id" value={id} />
            <input
              type="text"
              name="title"
              placeholder="Add a new item..."
              required
              defaultValue={data.title}
              className="flex-1 bg-gray-500 text-gray-100 border border-gray-700 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-xl font-medium transition-colors shadow-sm"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;

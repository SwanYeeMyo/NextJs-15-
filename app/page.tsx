import { createData, deleteData, readData } from "@/server/action";
import Link from "next/link";

export default async function Home() {
  const { data } = await readData();

  return (
    <>
      <div className="max-w-md mx-auto w-full p-6">
        <div className="space-y-3">
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <div
                key={item.id || index}
                className="flex items-center justify-between p-4 bg-gray-800 border border-gray-700 rounded-xl shadow-sm"
              >
                <Link href={`/update/${item.id}`}>
                  <p className="text-gray-100 font-medium truncate pr-4">
                    {item.title}
                  </p>
                </Link>
                <form action={deleteData}>
                  <input type="hidden" name="id" value={item.id} />
                  <button
                    type="submit"
                    className="text-sm text-red-400 hover:text-red-300 hover:bg-red-400/10 px-3 py-1.5 rounded-lg transition-colors font-medium"
                  >
                    Delete
                  </button>
                </form>
              </div>
            ))
          ) : (
            <div className="text-center py-10 border-2 border-dashed border-gray-700 rounded-xl">
              <h5 className="text-gray-500 font-medium">
                No data at the moment
              </h5>
            </div>
          )}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800">
          <form action={createData} className="flex gap-3">
            <input
              type="text"
              name="title"
              placeholder="Add a new item..."
              required
              className="flex-1 bg-gray-900 text-gray-100 border border-gray-700 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
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
}

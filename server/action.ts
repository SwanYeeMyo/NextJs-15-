"use server";

import { db } from "@/server";
import { todo } from "./schema";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

// export const readData = async () => {
//   const todos = await db.query.todo.findMany();

//   if (!todos) {
//     return { error: "no todo found" };
//   }
//   return { success: todos };
// };

// export const createData = async (formData: FormData) => {
//   const title = formData.get("title")?.toString();

//   if (title) {
//     await db.insert(todo).values({ title });
//     revalidatePath("/");
//   }
// };

// export const deleteData = async (formData: FormData) => {
//   const id = formData.get("id");
//   if (!id) {
//     return;
//   }
//   await db.delete(todo).where(eq(todo.id, Number(id)));
//   revalidatePath("/");
// };

export const readData = async () => {
  const todos = await db.query.todo.findMany();
  if (!todos) {
    return { error: "Not found" };
  }
  return { data: todos };
};

export const createData = async (formData: FormData) => {
  const title = formData.get("title")?.toString();

  if (title) {
    await db.insert(todo).values({ title });
    revalidatePath("/");
  }
};

export const deleteData = async (fromData: FormData) => {
  const id = Number(fromData.get("id"));
  if (id) {
    await db.delete(todo).where(eq(todo.id, id));
    revalidatePath("/");
  }
};

export const updateData = async (FormData: FormData) => {
  const title = FormData.get("title")?.toString();
  const id = Number(FormData.get("id"));

  if (title && id) {
    await db.update(todo).set({ title }).where(eq(todo.id, id));
    revalidatePath("/");
  }
};

export const update = async (FormData: FormData) => {
  const id = FormData.get("id");
  const title = FormData.get("title")?.toString();
  if (id && title) {
    await db
      .update(todo)
      .set({ title })
      .where(eq(todo.id, Number(id)));
    redirect("/");
  }
};

export const showData = async (id: number) => {
  const data = await db.query.todo.findFirst({ where: eq(todo.id, id) });

  if (!data) {
    return { error: "not found" };
  }
  return { data: data };
};
//
//  const todos = await db.query.todo.findMany();
// await db.insert(todo).values({ title });
// await db.update(todo).set({ title }).where(eq(todo.id, id));
// await db.delete(todo).where(eq(todo.id, id));

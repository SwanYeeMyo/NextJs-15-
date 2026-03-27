"use server";

import { redirect } from "next/navigation";
import { db } from "..";
import { blogs } from "../schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const getBlogs = async () => {
  const blogs = await db.query.blogs.findMany();
  return { blogs: blogs };
};

export const createBlog = async (formData: FormData) => {
  const title = formData.get("title")?.toString();
  const description = formData.get("description")?.toString();
  if (title && description) {
    await db.insert(blogs).values({ title, description });
    redirect("/blog");
  }
};

export const showBlog = async (id: number) => {
  const blog = await db.query.blogs.findFirst({ where: eq(blogs.id, id) });

  if (!blog) {
    return { error: "not found" };
  }
  return { blog: blog };
};

export const updateBlog = async (formData: FormData) => {
  const id = formData.get("id");
  const title = formData.get("title")?.toString();
  const description = formData.get("description")?.toString();
  if (id && title && description) {
    await db
      .update(blogs)
      .set({ title, description })
      .where(eq(blogs.id, Number(id)));
    redirect("/blog");
  }
};

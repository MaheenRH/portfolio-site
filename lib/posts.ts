import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
};

const postsDirectory = path.join(process.cwd(), "posts");

// Read all markdown files & extract metadata
export function getAllPostsMeta(): PostMeta[] {
  const files = fs.readdirSync(postsDirectory);

  return files
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContent = fs.readFileSync(filePath, "utf-8");

      const { data } = matter(fileContent);

      return {
        slug: fileName.replace(".md", ""),
        title: data.title ?? "Untitled Post",
        excerpt: data.excerpt ?? "",
      };
    });
}

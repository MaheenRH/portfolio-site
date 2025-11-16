import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const fullPath = path.join(process.cwd(), "posts", `${params.slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">404 — Post Not Found</h1>
        <p className="text-gray-600">This blog post doesn’t exist.</p>
      </div>
    );
  }

  const file = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(file);

  const processed = await remark().use(html).process(content);
  const htmlContent = processed.toString();

  return (
    <div className="prose max-w-3xl mx-auto pt-10 pb-20 prose-headings:font-bold prose-a:text-blue-600">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
        {data.title || "Untitled Post"}
      </h1>

      <article
        className="text-gray-800 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}

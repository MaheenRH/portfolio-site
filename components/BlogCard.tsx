import Link from "next/link";
import { PostMeta } from "@/lib/posts";

export default function BlogCard({ slug, title, excerpt }: PostMeta) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="block p-6 rounded-2xl border shadow hover:shadow-md transition"
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>

      {excerpt && (
        <p className="text-gray-600">
          {excerpt}
        </p>
      )}
    </Link>
  );
}

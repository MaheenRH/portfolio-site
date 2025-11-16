import Link from "next/link";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
}

export default function BlogCard({ slug, title, excerpt }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="block p-6 rounded-2xl border shadow hover:shadow-md transition"
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{excerpt}</p>
    </Link>
  );
}

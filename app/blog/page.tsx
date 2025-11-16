import BlogList from "@/components/BlogList";
import { getAllPostsMeta } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPostsMeta();
  return <BlogList posts={posts} />;
}

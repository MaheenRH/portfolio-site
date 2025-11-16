import { getAllPostsMeta } from "@/lib/posts";
import BlogList from "@/components/BlogList";

export default function Blog() {
  const posts = getAllPostsMeta(); // SERVER ONLY

  return <BlogList posts={posts} />; // CLIENT ANIMATION WRAPPER
}

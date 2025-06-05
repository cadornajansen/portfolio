import { ArrowUpLeft } from "lucide-react";
import Link from "next/link";
import { Pagination } from "@/components/ui/pagination";
import { getPosts } from "@/lib/posts";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default async function BlogPostsPage({
  searchParams,
}: {
  searchParams: Promise<{
    tags?: string;
    order?: "newest" | "oldest";
    page?: string;
    limit?: string;
  }>;
}) {
  const params = await searchParams;

  const tags = params.tags?.split(",");
  const order = params.order ?? "newest";
  const page = Number(params.page ?? 1);
  const limit = Number(params.limit ?? 3);

  const { posts, pageCount } = await getPosts({
    tags,
    newest: order === "newest",
    page,
    limit,
  });

  return (
    <div className="w-full flex flex-col gap-4">
      <header className="space-y-2">
        <Link
          href="/"
          className="hover:text-foreground/90 text-foreground/80 duration-300 cursor-pointer text-2xl font-bold flex items-center gap-1"
        >
          <ArrowUpLeft className="h-6 w-6" />
          Recent Blogs
        </Link>

        <div className="text-lg text-gray-600 dark:text-gray-400">
          Stay up to date with most recent posts
        </div>
      </header>
      <Separator />

      <div className="mb-8">
        Display&nbsp;
        {order === "newest" && (
          <Link href="/blog?order=oldest" className="underline">
            oldest
          </Link>
        )}
        {order === "oldest" && (
          <Link href="/blog?order=newest" className="underline">
            newest
          </Link>
        )}
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <Card className="relative h-full flex flex-col p-4 hover:shadow-lg transition-shadow duration-200">
                <CardHeader className="mb-8">
                  <CardTitle className="text-lg md:text-xl text-gray-800 dark:text-gray-100">
                    {post.frontmatter.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2 text-sm">
                    {post.frontmatter.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="absolute bottom-0 py-4">
                  <div className="bg-background px-2 py-1 text-xs rounded-md text-gray-500 dark:text-gray-400">
                    {post.frontmatter.date}
                  </div>
                </CardFooter>
              </Card>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Pagination pageCount={pageCount} />
      </div>
    </div>
  );
}

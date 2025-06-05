import { getPosts } from "@/lib/posts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpenText, MoveUpRight } from "lucide-react";
import Link from "next/link";

interface BlogPostsPageProps {
  searchParams: {
    tags?: string;
    order?: "newest" | "oldest";
    page?: string;
    limit?: string;
  };
}

export async function BlogCard({ searchParams }: BlogPostsPageProps) {
  const tags = searchParams.tags?.split(",");
  const order = searchParams.order ?? "newest";
  const page = Number(searchParams.page ?? 1);
  const limit = Number(searchParams.limit ?? 4);

  const { posts } = await getPosts({
    tags,
    newest: order === "newest",
    page,
    limit,
  });
  return (
    <Card className="col-span-4 gap-1">
      <CardHeader>
        <CardTitle className="flex justify-between">
          <span className="flex gap-2 font-semibold items-center">
            <BookOpenText className="w-5 h-5" />
            My Blog Posts
          </span>
          <Link
            href="/blog"
            className="hover:text-foreground/90 duration-300 p-0 cursor-pointer text-xs flex gap-1 text-foreground/70 items-center"
          >
            View all
            <MoveUpRight className="w-3 h-3" />
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-4">
        {posts.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.slug}
            className="cursor-pointer contents"
          >
            <div className="hover: rounded-md border px-3 py-2 flex flex-col gap-1">
              <span className="text-sm font-bold">
                {post.frontmatter.title}
              </span>
              <span className="text-xs text-foreground/70">
                {post.frontmatter.description}
              </span>
              <div className="flex items-center gap-2 mt-1">
                {post.frontmatter.tags?.map((tag, idx) => (
                  <span
                    className="bg-background/70 rounded-md px-2 py-1 text-xs font-light "
                    key={idx}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}

import { notFound } from "next/navigation";
import { getPost as getPostNotCached, getPosts } from "@/lib/posts";
import { cache } from "react";
import Link from "next/link";

const getPost = cache(async (slug: string) => await getPostNotCached(slug));

export async function generateStaticParams() {
  const { posts } = await getPosts({ limit: 1000 });
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const { frontmatter } = await getPost(slug);
    return frontmatter;
  } catch {
    return {};
  }
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post;

  try {
    post = await getPost(slug);
  } catch {
    notFound();
  }

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <article className="prose-sm dark:prose-invert prose md:prose-base xl:prose-lg max-w-none w-full text-sm leading-relaxed">
        {post.content}
      </article>
      <div className="mt-8 w-full bg-muted px-4 py-2 rounded-md flex gap-2 items-center">
        <span className="font-bold text-lg">Tags:</span>
        {post?.frontmatter?.tags?.map((tag: string) => (
          <Link
            key={tag}
            href={`/blog/?tags=${tag}`}
            className="dark:text-gray-400 text-gray-500 text-sm"
          >
            #{tag}
          </Link>
        ))}
      </div>
    </div>
  );
}

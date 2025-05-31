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
  } catch (e) {
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
  } catch (e) {
    notFound();
  }

  return (
    <article className="prose dark:prose-invert">
      {post.content}
      <div className="w-full bg-muted px-4 py-2 rounded-md flex space-x-2 mt-2 items-center">
        <span className="font-bold text-lg">Tags:</span>
        {post?.frontmatter?.tags?.map((tag: string) => (
          <Link
            key={tag}
            href={`/blog/?tags=${tag}`}
            className="dark:text-gray-400 text-gray-500"
          >
            #{tag}
          </Link>
        ))}
      </div>
    </article>
  );
}

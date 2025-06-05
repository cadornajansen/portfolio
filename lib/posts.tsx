import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CONTENT_DIR = path.join(process.cwd(), "content");

export function loadPost(slug: string): string {
  const filename = slug.endsWith(".mdx") ? slug : `${slug}.mdx`;
  const filePath = path.join(CONTENT_DIR, filename);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Post not found: ${filename}`);
  }

  return fs.readFileSync(filePath, "utf8");
}
const mdxComponents = {
  code: ({
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode }) => {
    const match = /language-(\w+)/.exec(className || "");
    return match ? (
      <SyntaxHighlighter
        language={match[1]}
        // @ts-expect-error: oneDark has incompatible type but works fine at runtime
        style={oneDark}
        PreTag="div"
        className="rounded-md my-4 text-sm"
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className="bg-muted px-1 py-0.5 rounded text-sm" {...props}>
        {children}
      </code>
    );
  },
};

export async function getPost(slug: string) {
  const source = loadPost(slug);

  const { content, frontmatter } = await compileMDX<{
    title: string;
    description: string;
    date: string;
    tags?: string[];
  }>({
    source,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
    },
  });

  return {
    content,
    frontmatter,
  };
}

interface GetPostsOptions {
  newest?: boolean;
  page?: number;
  limit?: number;
  tags?: string[];
}

export async function getPosts({
  newest = true,
  page = 1,
  limit = 3,
  tags,
}: GetPostsOptions = {}) {
  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".mdx"));

  const posts = await Promise.all(
    files.map(async (filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const { frontmatter } = await getPost(slug);

      return {
        slug,
        frontmatter,
      };
    })
  );

  let filtered = posts;

  if (tags && tags.length > 0) {
    filtered = filtered.filter((post) =>
      (post.frontmatter.tags || []).some((tag) => tags.includes(tag))
    );
  }

  filtered.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date);
    const dateB = new Date(b.frontmatter.date);
    return newest
      ? dateB.getTime() - dateA.getTime()
      : dateA.getTime() - dateB.getTime();
  });

  const start = (page - 1) * limit;
  const end = page * limit;

  return {
    posts: filtered.slice(start, end),
    pageCount: Math.ceil(filtered.length / limit),
  };
}

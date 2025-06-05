import { compileMDX } from "next-mdx-remote/rsc";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import slugs from "@/data/blog-posts.json";

const GITHUB_RAW_BASE =
  "https://raw.githubusercontent.com/cadornajansen/portfolio/main/content";

export async function loadPost(slug: string): Promise<string> {
  const filename = slug.endsWith(".mdx") ? slug : `${slug}.mdx`;
  const url = `${GITHUB_RAW_BASE}/${filename}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Post not found at ${url}`);
  }

  return await res.text();
}

// MDX component overrides
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

export async function getPostMeta(slug: string) {
  const res = await fetch(`${GITHUB_RAW_BASE}/${slug}.mdx`);
  if (!res.ok) throw new Error('Failed to load post content');

  const text = await res.text();
  const match = /---([\s\S]*?)---/.exec(text);
  const frontmatterBlock = match?.[1] || '';
  
  const metadata: Record<string, string> = {};
  frontmatterBlock.split('\n').forEach((line) => {
    const [key, ...rest] = line.split(':');
    if (key && rest.length > 0) {
      metadata[key.trim()] = rest.join(':').trim();
    }
  });

  return {
    title: metadata.title || 'Untitled Post',
    description: metadata.description || '',
  };
}


// Load a single post
export async function getPost(slug: string) {
  const source = await loadPost(slug);

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
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const { frontmatter } = await getPost(slug);
      return { slug, frontmatter };
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

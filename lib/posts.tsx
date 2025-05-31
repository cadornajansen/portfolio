import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { H1, H2, H3, H4, H5, H6 } from "@/components/ui/headings";

const CONTENT_DIR = path.join(process.cwd(), "content");

export function loadPost(slug: string): string {
  const filename = slug.endsWith(".mdx") ? slug : `${slug}.mdx`;
  const filePath = path.join(CONTENT_DIR, filename);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Post not found: ${filename}`);
  }

  return fs.readFileSync(filePath, "utf8");
}

export async function getPost(slug: string) {
  const source = loadPost(slug);

  const { content, frontmatter } = await compileMDX<{
    title: string;
    description: string,
    date: string;
    tags?: string[];
    [key: string]: any;
  }>({
    source,
    components: {
      h1: (props) => <H1 {...props} />,
      h2: (props) => <H2 {...props} />,
      h3: (props) => <H3 {...props} />,
      h4: (props) => <H4 {...props} />,
      h5: (props) => <H5 {...props} />,
      h6: (props) => <H6 {...props} />,
    },
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

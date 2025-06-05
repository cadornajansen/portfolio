export async function getPostMeta(slug: string) {
  const res = await fetch(
    `https://raw.githubusercontent.com/cadornajansen/portfolio/main/content/${slug}.mdx`
  );
  if (!res.ok) throw new Error("Failed to load post content");

  const text = await res.text();
  const match = /---([\s\S]*?)---/.exec(text);
  const frontmatterBlock = match?.[1] || "";

  const metadata: Record<string, string> = {};
  frontmatterBlock.split("\n").forEach((line) => {
    const [key, ...rest] = line.split(":");
    if (key && rest.length > 0) {
      metadata[key.trim()] = rest.join(":").trim();
    }
  });

  return {
    title: metadata.title || "Untitled Post",
    description: metadata.description || "",
  };
}

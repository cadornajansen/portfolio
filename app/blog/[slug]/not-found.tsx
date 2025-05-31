export default function NotFound() {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold">404</h1>
      <div>Blog post was not found</div>
      <div className="mt-4">
        <div>You might want to check some blog posts</div>
        <ul>
          <li>First</li>
          <li>Second</li>
        </ul>
      </div>
    </div>
  );
}

import Link from 'next/link';

export default function BlogNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
      <p className="mb-4">Sorry, the blog post you are looking for does not exist.</p>
      <Link className="text-blue-500 hover:text-blue-700" href="/page/blog">
        Return to Blog Page
      </Link>
    </div>
  );
}
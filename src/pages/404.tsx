import Link from 'next/link';
import { useRouter } from 'next/router';

export default function BlogNotFound() {
  const route = useRouter()
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="mb-4">Sorry, the page you are looking for does not exist.</p>
      <button className="text-blue-500 hover:text-blue-700" onClick={()=>route.back()}>
        Go Back
      </button>
    </div>
  );
}
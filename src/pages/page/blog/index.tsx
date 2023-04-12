import BlogCard from '@/components/BlogCard';
import PageTitle from '@/components/PageTitle';
import { FiBook } from '@react-icons/all-files/fi/FiBook';
import { notFound } from "next/navigation";


const BlogPage = ({ posts }: any) => {
  return (<>      <PageTitle text='My Blogs.' Icon={<FiBook className='text-font-inherit' />} />
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      {posts.map((post: any) => (
        <BlogCard
          key={post.id}
          title={post.title}
          excerpt={post.excerpt}
          slug={post.slug}
        />
      ))}
    </div></>
  );
};

export async function getStaticProps() {
  // Fetch blog post data from an API or a database
  const posts = [
    { id: 1, title: 'Blog post 1', excerpt: 'Excerpt for blog post 1', slug: 'blog-1' },
    { id: 2, title: 'Blog post 2', excerpt: 'Excerpt for blog post 2', slug: 'blog-2' },
    { id: 3, title: 'Blog post 3', excerpt: 'Excerpt for blog post 3', slug: 'blog-3' },
  ];
  if (!posts) {
    return {
      notFound: true,
    }
  }

  return { props: { posts } };
}

export default BlogPage;
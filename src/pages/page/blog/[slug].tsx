const BlogPost = ({ title, content }: any) => {
    return (
        <div className="max-w-2xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
};

export async function getStaticPaths() {
    // Fetch blog post slugs from an API or a database
    const slugs = ['blog-1', 'blog-2', 'blog-3'];

    const paths = slugs.map((slug) => ({ params: { slug } }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
    // Fetch blog post data for the specified slug from an API or a database
    const post = { title: `Blog post ${params.slug}`, content: `<p>Content for blog post ${params.slug}</p>` };

    return { props: post };
}

export default BlogPost;

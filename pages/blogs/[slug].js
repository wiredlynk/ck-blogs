import { notFound } from "next/navigation";

import { allBlogs } from "contentlayer/generated";
import { Layout, Row, Text, Mdx } from "~/components";

export async function getStaticPaths() {
  const paths = allBlogs.map((blog) => blog.slug);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blog = allBlogs.find((blog) => blog.slugAsParams === params.slug);
  return {
    props: {
      blog,
    },
  };
}

export default function PostPage({ blog }) {
  return (
    <Layout>
      <Row
        className="relative max-w-screen-lg"
        spacing="top-medium bottom-medium"
      >
        <article className="relative">
          <Text variant="time">{blog.date}</Text>
          <Text variant="h1">{blog.title}</Text>
          {blog.image && (
            <img
              src={blog.image}
              alt={blog.title}
              className="my-8 rounded-xl transition-colors group-hover:border-slate-900"
            />
          )}
          <Mdx code={blog.body.code} />
        </article>
      </Row>
    </Layout>
  );
}

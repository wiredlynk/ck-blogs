import { notFound } from "next/navigation";
import Image from "next/image";

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
  if (!blog) {
    notFound();
  }
  console.log("🚀 ~ file: [slug].js:26 ~ PostPage ~ blog", blog);

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
            <Image
              src={blog.image}
              alt={blog.title}
              width={1024}
              height={1024}
              className="my-8 rounded-xl transition-colors group-hover:border-slate-900"
              priority
            />
          )}
          <Mdx code={blog.body.code} />
        </article>
      </Row>
    </Layout>
  );
}

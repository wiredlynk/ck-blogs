import { compareDesc } from "date-fns";
import { allBlogs } from "contentlayer/generated";
import { HeroJumbotron, Row, Card, Layout } from "~/components";

export default function Home() {
  const blogs = allBlogs.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return (
    <Layout>
      <HeroJumbotron
        eyebrow="Quis nostrud exercitation"
        title="Blogs"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
      />
      <Row spacing="bottom-medium" column={2}>
        {blogs && blogs.map((blog, index) => <Card key={index} {...blog} />)}
      </Row>
    </Layout>
  );
}

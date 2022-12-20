import Head from "next/head";
import { HeroJumbotron, Layout, Button } from "~/components";

export default function Page404() {
  const statusCode = 404;
  const title = "Sorry, we couldn't find what you were looking for.";
  return (
    <Layout>
      <Head>
        <title>{statusCode}</title>
      </Head>
      <HeroJumbotron
        fullHeight
        eyebrow={statusCode}
        heading={title}
        leftContent={<Button href="/">Go back to home page</Button>}
      />
    </Layout>
  );
}

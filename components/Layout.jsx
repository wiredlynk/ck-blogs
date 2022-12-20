import { Header, Footer } from "~/components";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex-1 pt-16 md:pt-24">{children}</main>
      <Footer />
    </>
  );
};

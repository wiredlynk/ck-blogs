/**
 * @sample nav link
 * {
 *    label: "Home",
 *    href: "/",
 *  }
 */
export const routes = {
  homePage: false,
  navbar: [],
  sidebarBar: [
    {
      label: "dashboard",
      href: "/accounts/dashboard",
    },
    // {
    //   label: "kitchens",
    //   href: "/admin/kitchens",
    //   role: ["ADMIN"],
    // },
    // {
    //   label: "menu",
    //   href: "/admin/menus",
    //   role: ["ADMIN"],
    // },
    // {
    //   label: "category",
    //   href: "/admin/categories",
    //   role: ["ADMIN"],
    // },
    // {
    //   label: "hotels",
    //   href: "/admin/hotels",
    //   role: ["ADMIN"],
    // },
    // {
    //   label: "users",
    //   href: "/admin/users",
    //   role: ["ADMIN"],
    // },
    {
      label: "blogs",
      href: "/accounts/blogs",
      role: ["ADMIN"],
    },
    {
      label: "settings",
      href: "/accounts/settings",
    },
  ],
  footerBar: [],
};

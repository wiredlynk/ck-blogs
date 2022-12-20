import Link from "next/link";
import Image from "next/image";
import { getSetting } from "~/utils/settings";

const siteTitle = getSetting("title");
const logoUrl = getSetting("logoUrl");

const focusClass =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 focus-visible:brightness-125";

export function Logo({ size = "large", className = "" }) {
  if (logoUrl) {
    return (
      <Link href="/" aria-label="Go to home page" className="h-12 w-12">
        <Image src={logoUrl} alt={siteTitle} width={100} height={100} />
      </Link>
    );
  } else {
    return (
      <Link
        href="/"
        aria-label="Go to home page"
        className={`text-center inline-block font-bold text-black dark:text-white tracking-tight ${
          size === "small" ? "" : "text-3xl"
        } ${focusClass} ${className}`}
      >
        {siteTitle}
      </Link>
    );
  }
}

// className={`text-center inline-block font-bold text-white dark:text-black bg-black dark:bg-white rounded-full tracking-tight ${
//   size === "small" ? "h-7 w-7 py-0.5" : "text-2xl h-12 w-12 p-2"
// } ${focusClass} ${className}`}

import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Text } from "~/components";

const components = {
  h1: ({ className, ...props }) => <Text variant="h1" {...props} />,
  h2: ({ className, ...props }) => <Text variant="h2" {...props} />,
  h3: ({ className, ...props }) => <Text variant="h3" {...props} />,
  h4: ({ className, ...props }) => <Text variant="h4" {...props} />,
  h5: ({ className, ...props }) => <Text variant="h5" {...props} />,
  h6: ({ className, ...props }) => <Text variant="h6" {...props} />,
  p: ({ className, ...props }) => <Text {...props} />,
  ul: ({ className, ...props }) => (
    <ul className="my-8 ml-8 list-disc text-black dark:text-white" {...props} />
  ),
  ol: ({ className, ...props }) => (
    <ol
      className="my-8 ml-8 list-decimal text-black dark:text-white"
      {...props}
    />
  ),
  li: ({ className, ...props }) => <li className="mt-2" {...props} />,
  blockquote: ({ className, ...props }) => (
    <blockquote
      className="my-8 border-l-4 border-gray-600 dark:border-gray-300 px-6 py-4 italic bg-gray-200 dark:bg-gray-800 rounded-md"
      {...props}
    />
  ),
  img: ({ className, alt, ...props }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="rounded-xl" alt={alt} {...props} />
  ),
  hr: ({ ...props }) => (
    <hr className="my-4 border-gray-200 dark:border-gray-700" {...props} />
  ),
  table: ({ className, ...props }) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full" {...props} />
    </div>
  ),
  tr: ({ className, ...props }) => (
    <tr className="m-0 p-0 even:bg-gray-100 even:dark:bg-gray-800" {...props} />
  ),
  th: ({ className, ...props }) => (
    <th
      className="text-black dark:text-white border border-gray-200 dark:border-gray-700 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td
      className="text-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
      {...props}
    />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className="mt-6 mb-4 overflow-x-auto rounded-xl bg-black py-4"
      {...props}
    />
  ),
  code: ({ className, ...props }) => (
    <code
      className="relative rounded border border-gray-400 dark:border-gray-600 bg-gray-400 dark:bg-gray-700 bg-opacity-25 py-[0.2rem] px-[0.3rem] font-mono text-sm text-gray-600 dark:text-gray-300"
      {...props}
    />
  ),
  Image: ({ className, ...props }) => (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image className="rounded-xl my-6" {...props} />
  ),
};

export function Mdx({ code }) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}

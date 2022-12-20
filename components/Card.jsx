import Link from "next/link";
import { Text } from "~/components";

export const Card = (props) => {
  const { title, image, description, date, slug } = props;

  return (
    <article className="group relative flex flex-col space-y-2 mb-4">
      {image && <img src={image} alt={title} className="rounded-xl" />}
      <Text variant="time">{date}</Text>
      <Text variant="h2">{title}</Text>
      <Text>{description}</Text>
      <Link href={slug} className="absolute inset-0">
        <span className="sr-only">View Article</span>
      </Link>
    </article>
  );
};

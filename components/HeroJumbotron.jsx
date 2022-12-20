import { Row, Text } from "~/components";

export function HeroJumbotron({ title, heading, description, eyebrow }) {
  return (
    <Row column={2} spacing="top-medium bottom-medium">
      <div>
        {eyebrow ? <Text variant="eyebrow">{eyebrow}</Text> : null}
        {title ? <Text variant="title">{title}</Text> : null}
        {heading ? <Text variant="h2">{heading}</Text> : null}
        {description ? <Text variant="subtitle">{description}</Text> : null}
      </div>
    </Row>
  );
}

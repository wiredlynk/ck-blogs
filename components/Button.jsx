import Link from "next/link";

const defaultClass =
  "whitespace-nowrap inline-flex items-center justify-center font-semibold transition duration-200 ease-in-out capitalize disabled:opacity-50";
const solidButtonClass =
  "bg-black dark:bg-primary text-white dark:text-gray-900 hover:brightness-125";
const flatButtonClass =
  "text-black dark:text-primary dark:hover:bg-primary/[.025] hover:bg-gray-100";
const linkButtonClass =
  "relative dark:text-white text-black border-b-2 border-gray-800 dark:border-white hover:border-black dark:hover:border-primary rounded-sm";
const focusClass =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 focus-visible:brightness-125";

/**
 * @summary Flat button
 * @param href
 */
const FlatButton = ({ href, children }) => {
  const flatButton = `${defaultClass} ${flatButtonClass} ${focusClass}`;
  if (href) {
    return (
      <Link className={flatButton} {...{ href }}>
        {children}
      </Link>
    );
  } else {
    // Flat button
    return <button className={flatButton}>{children}</button>;
  }
};

/**
 * @summary Solid button
 * @param href
 */
function SolidButton({ href, children, ...rest }) {
  const solidButton = `${defaultClass} ${solidButtonClass} ${focusClass}`;
  if (href) {
    return (
      <Link className={solidButton} {...{ href }}>
        {children}
      </Link>
    );
  } else {
    // Solid button
    return (
      <button className={solidButton} {...rest}>
        {children}
      </button>
    );
  }
}

export function Button(props) {
  const { variant, href, children } = props;
  const linkClassName = `${defaultClass} ${linkButtonClass} ${focusClass}`;

  if (variant === "link") {
    // Link button
    return (
      <Link className={linkClassName} {...{ href }}>
        {children}
      </Link>
    );
  } else if (variant === "flat") {
    // Flat button with link
    return <FlatButton {...props} />;
  } else {
    // Solid button with link
    return <SolidButton {...props} />;
  }
}

import { formatDate } from "~/utils/utils";

export const Text = ({ variant, className = "", children }) => {
  const defaultClass = "block text-black dark:text-white";

  if (variant === "h1") {
    return (
      <h1
        className={`mb-4 text-4xl md:mb-5 md:text-5xl lg:mb-6 lg:text-6xl font-extrabold md:font-black ${defaultClass}`}
      >
        {children}
      </h1>
    );
  } else if (variant === "h2") {
    return (
      <h2
        className={`mb-4 text-3xl font-bold md:text-4xl md:font-extrabold ${defaultClass}`}
      >
        {children}
      </h2>
    );
  } else if (variant === "h3") {
    return (
      <h3 className={`mb-4 text-2xl font-extrabold ${defaultClass}`}>
        {children}
      </h3>
    );
  } else if (variant === "h4") {
    return (
      <h4 className={`mb-4 text-2xl font-extrabold ${defaultClass}`}>
        {children}
      </h4>
    );
  } else if (variant === "h5") {
    return (
      <h5 className={`mb-2 text-xl font-bold ${defaultClass}`}>{children}</h5>
    );
  } else if (variant === "h6") {
    return (
      <h6 className={`mb-2 text-xl font-bold ${defaultClass}`}>{children}</h6>
    );
  } else if (variant === "eyebrow") {
    return (
      <span
        className={`text-lg font-semibold leading-loose ${defaultClass} ${className}`}
      >
        {children}
      </span>
    );
  } else if (variant === "title") {
    return (
      <h1
        className={`mb-6 text-6xl md:mb-7 md:text-7xl lg:mb-8 lg:text-8xl font-black  ${defaultClass} ${className}`}
      >
        {children}
      </h1>
    );
  } else if (variant === "subtitle") {
    return (
      <span className={`text-xl ${defaultClass} ${className}`}>{children}</span>
    );
  } else if (variant === "time") {
    return (
      <time
        dateTime={children}
        className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
      >
        Published on {formatDate(children)}
      </time>
    );
  } else {
    return <p className={`mb-4 ${defaultClass} ${className}`}>{children}</p>;
  }
};

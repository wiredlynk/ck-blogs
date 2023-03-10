export const Row = ({ spacing = "", column = 1, className = "", children }) => {
  let topSpacing = "";
  let bottomSpacing = "";
  let rowColumn = "";

  if (spacing) {
    const setSpacing = spacing.split(" ");
    setSpacing.forEach((space) => {
      switch (space) {
        case "top-xlarge":
          topSpacing = "pt-36 md:pt-48";
          break;
        case "top-large":
          topSpacing = "pt-24 md:pt-32";
          break;
        case "top-medium":
          topSpacing = "pt-12 md:pt-16";
          break;
        case "top-small":
          topSpacing = "pt-6 md:pt-8";
          break;
        case "bottom-xlarge":
          bottomSpacing = "pb-36 md:pb-48";
          break;
        case "bottom-large":
          bottomSpacing = "pb-24 md:pb-32";
          break;
        case "bottom-medium":
          bottomSpacing = "pb-12 md:pb-16";
          break;
        case "bottom-small":
          bottomSpacing = "pb-6 md:pb-8";
          break;
        default:
          topSpacing = "";
          bottomSpacing = "";
      }
    });
  }

  if (column) {
    switch (column) {
      case 1:
        rowColumn = "grid-cols-1";
        break;
      case 2:
        rowColumn = "grid-cols-1 lg:grid-cols-2";
        break;
      case 3:
        rowColumn = "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3";
        break;
      case 4:
        rowColumn = "grid-cols-1 lg:grid-cols-4";
        break;
      default:
        rowColumn = "grid-cols-1";
    }
  }

  return (
    <div
      className={`container mx-auto px-6 ${topSpacing} ${bottomSpacing} ${
        column > 1 ? `grid gap-10 ${rowColumn}` : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

/** @jsxImportSource @emotion/react */
import "./Container.css";

export const titles = {
  plusAccommodation: {
    title: "Chairdnb Plus accommodation",
    description:
      "A selection of accommodation verified according to quality and connectivity criteria",
  },
  adventures: {
    title: "Discover Chairdnb adventures",
    description:
      "Multi-day hackatons organized by local experts with activities, meals and accommodation included",
  },
  accommodation: {
    title: "Accommodation around the world",
    description: " ",
  },
  experiences: {
    title: "Highly rated experiences",
    description:
      "Multi-day extreme programming sessions organized by local experts with activities, meals and accommodation included",
  },
  featured: {
    title: "Featured Chairdnb Plus Destinations",
    description:
      "Multi-day pair programming sessions organized by local experts with activities, meals and accommodation included",
  },
};

export const Container = ({ title, description, children }) => {
  return (
    <section className="container">
      {title && <h1 className="container__title">{title}</h1>}
      {description && <p className="container__description">{description}</p>}
      {children}
    </section>
  );
};

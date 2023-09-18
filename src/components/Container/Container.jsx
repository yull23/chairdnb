/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "./Container.css";

export const Container = ({ title, description, children }) => {
  return (
    <section className="container">
      {title && <h1 className="container__title">{title}</h1>}
      {description && <p className="container__description">{description}</p>}
      {children}
    </section>
  );
};

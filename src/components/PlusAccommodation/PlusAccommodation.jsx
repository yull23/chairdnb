/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Container, titles } from "../Container/Container";
import img from "./img.svg";

export default function PlusAccommodation() {
  return (
    <Container
      title={titles.plusAccommodation.title}
      description={titles.plusAccommodation.description}
    >
      <div
        className="container__panel"
        css={css`
          aspect-ratio: 4 / 1;
          display: flex;
          justify-content: center;
          align-items: end;
          width: 100%;
          border-radius: 4px;
          background: url(${img}) no-repeat;
          background-size: cover;
          background-position: center;
        `}
      >
        <a
          href="#"
          className="container__button"
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
            width: 200px;
            height: 44px;
            margin-bottom: 50px;
            border-radius: 0.25rem;
            background: var(--secondary-white, #fff);
            /* Typography */
            text-decoration: none;
            color: var(--secondary-dark-grey, #484848);
            font-size: 10px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            text-transform: uppercase;
          `}
        >
          discover accommodations
        </a>
      </div>
    </Container>
  );
}

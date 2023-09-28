/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import FormSearch from "../Form/Form";
import img from "./img.svg";
import "./Header.css";
import { handleSubmit } from "../../routes/Pages/HomePage/HomePage";

export default function Header({ form }) {
  return (
    <header
      className="header"
      css={css`
        background: url(${img}) no-repeat;
        background-size: cover;
        background-position: center;
      `}
    >
      {form ? (
        <a href="#" className="header__link">
          @ chairdnb
        </a>
      ) : (
        <a href="#" className="header__link">
          BACK
        </a>
      )}
      {form ? (
        <FormSearch onSubmit={handleSubmit} />
      ) : (
        <p className="header__text">SEARCH RESULTS FOR URUGUAY</p>
      )}
    </header>
  );
}

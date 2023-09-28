/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import FormSearch from "../Form/Form";
import img from "./img.svg";
import "./Header.css";
import { useParams } from "react-router-dom";

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
        <FormSearch />
      ) : (
        <p className="header__text">SEARCH RESULTS FOR URUGUAY</p>
      )}
    </header>
  );
}

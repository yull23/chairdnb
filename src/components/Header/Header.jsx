/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Form from "../Form/Form";
import img from "./img.svg";
import "./Header.css";

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
        <Form />
      ) : (
        <p className="header__text">SEARCH RESULTS FOR URUGUAY</p>
      )}
    </header>
  );
}

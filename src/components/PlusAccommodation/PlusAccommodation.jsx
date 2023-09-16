/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Container, titles } from "../Container/Container";
import img from "./img.png";

export default function PlusAccommodation() {
  return (
    <Container
      title={titles.plusAccommodation.title}
      description={titles.plusAccommodation.description}
    >
      <img src={img} alt="" />
    </Container>
  );
}

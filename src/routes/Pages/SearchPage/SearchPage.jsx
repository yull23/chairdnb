/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Header from "../../../components/Header/Header";
import { Container } from "../../../components/Container/Container";
import { Grid } from "../../../components/Grid/Grid";
import Card from "../../../components/Card/Card";
import { useLoaderData, useParams } from "react-router-dom";
import { getAllPlaces } from "../../../services/get-places";

export async function loader() {
  const allPlaces = await getAllPlaces("all");
  return {
    allPlaces,
  };
}

export function SearchPage() {
  const { allPlaces } = useLoaderData();
  console.log(allPlaces);

  return (
    <>
      <Header form={false} />
      <main
        css={css`
          display: flex;
          flex-direction: column;
          gap: 88px;
          max-width: 1366px;
          padding: 88px 80px;
          margin: auto;
        `}
      >
        <Container title="" description="">
          <Grid type="small" gap="16px" key="1" rowGap="40px">
            {allPlaces.map((element) => (
              <Card type="small" data={element} key={element.id} />
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}

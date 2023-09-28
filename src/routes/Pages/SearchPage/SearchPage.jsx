/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Header from "../../../components/Header/Header";
import { Container } from "../../../components/Container/Container";
import { Grid } from "../../../components/Grid/Grid";
import Card from "../../../components/Card/Card";
import { useLoaderData, useParams, useSearchParams } from "react-router-dom";
import { getAllPlaces } from "../../../services/get-places";

export async function loader({ request }) {
  let allPlaces = await getAllPlaces("all"); // datos de la API
  // URL
  const url = new URL(request.url);
  const params = {
    where: url.searchParams.get("where") || "",
    arrival: url.searchParams.get("arrival") || "",
    departure: url.searchParams.get("departure") || "",
    count: url.searchParams.get("count") || "",
  };
  console.log(params);
  // Filtrar
  if (params.where != "") {
    allPlaces = [
      ...allPlaces.filter((place) => {
        const randomNum = Math.floor(Math.random() * 5) + 1;
        return randomNum == parseInt(params.count);
      }),
    ];
  }
  if (params.arrival != "") {
    allPlaces = [
      ...allPlaces.filter(
        (place) => new Date(place.start_date) > new Date(params.arrival)
      ),
    ];
  }
  if (params.departure != "") {
    allPlaces = [
      ...allPlaces.filter(
        (place) => new Date(place.end_date) < new Date(params.departure)
      ),
    ];
  }
  console.log(allPlaces[0]);

  if (params.count != "") {
    allPlaces = [
      ...allPlaces.filter(
        (place) => place.country.toLowerCase() === params.where.toLowerCase()
      ),
    ];
  }

  return {
    allPlaces,
    where: params.where,
  };
}

export function SearchPage() {
  const { allPlaces, where } = useLoaderData();
  // console.log(allPlaces);

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

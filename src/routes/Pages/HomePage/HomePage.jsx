/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Accommodation from "../../../components/Accommodation/Accommodation";
import Adventures from "../../../components/Adventures/Adventures";
import Experiences from "../../../components/Experiences/Experiences";
import ExplorerCategories from "../../../components/ExplorerCategories/ExplorerCategories";
import FeatureDestinations from "../../../components/FeaturedDestinations/FeatureDestinations";
import Header from "../../../components/Header/Header";
import PlusAccommodation from "../../../components/PlusAccommodation/PlusAccommodation";
import { getAllPlaces } from "../../../services/get-places";
import { Outlet, useLoaderData, useMatch } from "react-router-dom";

export async function loader() {
  const allAdventures = await getAllPlaces("adventures");
  const allAccommodations = await getAllPlaces("accommodations");
  const allExperiences = await getAllPlaces("experiences");
  const allFeatured = await getAllPlaces("featured");
  return {
    allAdventures,
    allAccommodations,
    allExperiences,
    allFeatured,
  };
}

export function handleSubmit(e) {
  console.log(e.target);

  // e.preventDefault();
  // const formData = new FormData(e.target);
  // const where = formData.get("where");
  // const arrival = formData.get("arrival");
  // const departure = formData.get("departure");
  // const count = formData.get("developers");
  // Construye la URL de búsqueda con los parámetros
  // const searchUrl = `/search?where=${where}&arrival=${arrival}&departure=${departure}&count=${count}`;

  // Redirige a la página de búsqueda con los parámetros
  // console.log(searchUrl);
}

export function HomePage() {
  const { allAdventures, allAccommodations, allExperiences, allFeatured } =
    useLoaderData();
  const isSearchRoute = useMatch("/");

  return (
    <>
      <div hidden={!isSearchRoute}>
        {" "}
        <Header form={true} />
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
          <ExplorerCategories />
          <PlusAccommodation />
          <Adventures dataArray={allAdventures} />
          <Accommodation dataArray={allAccommodations} />
          <Experiences dataArray={allExperiences} />
          <FeatureDestinations dataArray={allFeatured} />
        </main>
      </div>
      <Outlet />
    </>
  );
}

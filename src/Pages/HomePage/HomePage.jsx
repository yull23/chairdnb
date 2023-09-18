/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Accommodation from "../../components/Accommodation/Accommodation";
import Adventures from "../../components/Adventures/Adventures";
import Experiences from "../../components/Experiences/Experiences";
import ExplorerCategories from "../../components/ExplorerCategories/ExplorerCategories";
import FeatureDestinations from "../../components/FeaturedDestinations/FeatureDestinations";
import Header from "../../components/Header/Header";
import PlusAccommodation from "../../components/PlusAccommodation/PlusAccommodation";

export function HomePage({
  dataAll,
  dataAdventures,
  dataAccommodations,
  dataExperiences,
  dataFeatureds,
}) {
  return (
    <>
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
        <Adventures dataArray={dataAdventures} />
        <Accommodation dataArray={dataAccommodations} />
        <Experiences dataArray={dataExperiences} />
        <FeatureDestinations dataArray={dataFeatureds} />
      </main>
      ;
    </>
  );
}

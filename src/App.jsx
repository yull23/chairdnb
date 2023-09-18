/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Accommodation from "./components/Accommodation/Accommodation";
import Adventures from "./components/Adventures/Adventures";
import Experiences from "./components/Experiences/Experiences";
import FeatureDestinations from "./components/FeaturedDestinations/FeatureDestinations";
import ExplorerCategories from "./components/ExplorerCategories/ExplorerCategories";
import PlusAccommodation from "./components/PlusAccommodation/PlusAccommodation";
import Header from "./components/Header/Header";
import { useEffect, useState } from "react";
import { getAllPlaces } from "./services/get-places";
import { HomePage } from "./Pages/HomePage/HomePage";

function App() {
  const [allPlaces, setAllPlaces] = useState([]);
  const [allAdventures, setAllAdventures] = useState([]);
  const [allAccommodations, setAllAccommodations] = useState([]);
  const [allExperiences, setAllExperiences] = useState([]);
  const [allFeatured, setAllFeatured] = useState([]);

  useEffect(() => {
    const allPlaces = async () => {
      setAllPlaces(await getAllPlaces("all"));
      setAllAdventures(await getAllPlaces("adventures"));
      setAllAccommodations(await getAllPlaces("accommodations"));
      setAllExperiences(await getAllPlaces("experiences"));
      setAllFeatured(await getAllPlaces("featured"));
    };
    allPlaces();
  }, []);
  console.log(allPlaces);
  console.log(allAdventures);
  console.log(allAccommodations);
  console.log(allExperiences);
  console.log(allFeatured);

  return (
    <>
      {/* <HomePage /> */}
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
        <Adventures dataArray={allAdventures.slice(0, 6)} />
        <Accommodation dataArray={allAccommodations.slice(0, 8)} />
        <Experiences dataArray={allExperiences.slice(0, 12)} />
        <FeatureDestinations dataArray={allFeatured.slice(0, 3)} />
      </main>
    </>
  );
}

export default App;

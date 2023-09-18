/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllPlaces } from "./services/get-places";
import { HomePage } from "./Pages/HomePage/HomePage";
import { SearchPage } from "./Pages/SearchPage/SearchPage";

function App() {
  const [allPlaces, setAllPlaces] = useState([]);
  const [allAdventures, setAllAdventures] = useState([]);
  const [allAccommodations, setAllAccommodations] = useState([]);
  const [allExperiences, setAllExperiences] = useState([]);
  const [allFeatured, setAllFeatured] = useState([]);
  const [searchPlace, setSearchPlace] = useState();

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
  // console.log(allPlaces);
  // console.log(allAdventures);
  // console.log(allAccommodations);
  // console.log(allExperiences);
  // console.log(allFeatured);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              dataAll={allPlaces}
              dataAdventures={allAdventures}
              dataAccommodations={allAccommodations}
              dataExperiences={allExperiences}
              dataFeatureds={allFeatured}
            />
          }
        />
        <Route
          path="/search"
          element={<SearchPage dataAll={allPlaces} filter={""} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

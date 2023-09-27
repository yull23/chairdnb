/** @jsxImportSource @emotion/react */
import { RouterProvider } from "react-router-dom";

import router from "./routes";

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// <Routes>
//   <Route
//     path="/"
//     element={
//       <HomePage
//         dataAll={allPlaces}
//         dataAdventures={allAdventures}
//         dataAccommodations={allAccommodations}
//         dataExperiences={allExperiences}
//         dataFeatureds={allFeatured}
//       />
//     }
//   />
//   <Route
//     path="/search"
//     element={<SearchPage dataAll={allPlaces} filter={""} />}
//   />
// </Routes>;

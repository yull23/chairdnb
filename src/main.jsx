import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Global } from "@emotion/react";
import { global, reset } from "./assets/global";
import { CardMedium, CardLarge } from "./components/Card/Cards/cards";

let data = {
  id: 10,
  name: "Glacier National Park",
  country: "United States",
  rating: 4.98,
  category: "adventure",
  verified_stays: 360,
  start_date: "2023-02-10",
  end_date: "2023-07-10",
  price: "90.0",
  created_at: "2023-03-07T22:50:33.188Z",
  updated_at: "2023-03-07T22:50:33.412Z",
  image_url: "https://picsum.photos/id/1019/640",
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Global styles={reset} />
    <Global styles={global} />
    <CardMedium data={data} />
    <CardLarge data={data} />
    {/* <App /> */}
  </React.StrictMode>
);

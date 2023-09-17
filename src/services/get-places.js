import { BASE_URL } from "../utils/constants";

export const getAllPlaces = async (query) => {
  const response = await fetch(BASE_URL + query);
  if (response.ok) {
    const data = response.json();
    return data;
  } else {
    const errorMessage = response.text();
    throw new Error(errorMessage);
  }
};

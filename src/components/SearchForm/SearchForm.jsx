import { useState } from "react";
import "./SearchForm.css";
export const SearchForm = ({ ca, data, onSearchPlaces }) => {
  const [name, setName] = useState("");
  const [terrain, setTerrain] = useState("");
  const [climate, setClimate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name && !terrain && !climate) {
      onSearchPlaces([]);
      return;
    }
    const hasName =
      name.length >= 1
        ? data.filter((place) =>
            place.name.toUpperCase().includes(name.toUpperCase())
          )
        : data;
    const hasTerrain =
      terrain.length >= 1
        ? hasName.filter((place) => place.terrain.includes(terrain))
        : hasName;
    const hasClimate =
      climate.length >= 1
        ? hasTerrain.filter((place) => place.climate.includes(climate))
        : hasTerrain;
    // console.log(hasClimate);
    onSearchPlaces(hasClimate);
  }
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <p>{ca}</p>
      <div>
        <label htmlFor="name">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          id="name"
        />
      </div>
      <div>
        <label htmlFor="terrain">Terrain</label>
        <input
          value={terrain}
          onChange={(e) => setTerrain(e.target.value)}
          type="text"
          name="terrain"
          id="terrain"
        />
      </div>
      <div>
        <label htmlFor="climate">Climate</label>
        <input
          value={climate}
          onChange={(e) => setClimate(e.target.value)}
          type="text"
          name="climate"
          id="climate"
        />
      </div>
      <button>Help me to search</button>
    </form>
  );
};

import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { Container } from "../Container/Container";
import { Grid } from "../Grid/Grid";
import { getAllPlaces } from "../../services/places_service";
import { formatNumber } from "../../utils/format_number";

export const Places = ({ onUpdatePlaces }) => {
  const [places, setPlaces] = useState([]);
  const [next, setNext] = useState(null);
  useEffect(() => {
    async function fetchPlaces() {
      const data = await getAllPlaces();
      setPlaces(data.results);
      onUpdatePlaces(data.results);
      setNext(data.next);
    }
    fetchPlaces();
  }, [onUpdatePlaces]);
  async function handleClick(event) {
    event.preventDefault();
    console.log(next);
    const data = await getAllPlaces(next);
    setPlaces(data.results);
    onUpdatePlaces(data.results);
    setNext(data.next);
  }
  return (
    <Container title="Places">
      <Grid columns={4} rows="auto" gap="15px">
        {places.map((place) => (
          <Card key={place.name}>
            <h2>{place.name}</h2>
            <div className="horizontal-group">
              <p>Rotation:{place.rotation_period}</p>
              <p>Orbital:{place.orbital_period}</p>
              <p>Diameter:{place.diameter}</p>
            </div>
            <div className="featured-group">
              <div className="featured-item">
                Climate
                <p>{place.climate}</p>
              </div>
              <div className="featured-item">
                Gravity
                <p>{place.gravity}</p>
              </div>
              <div className="featured-item">
                Terrain
                <p>{place.terrain}</p>
              </div>
              <div className="featured-item">
                Surface water
                <p>{place.surface_water}</p>
              </div>
            </div>
            <p className="center">Population</p>
            <p className="center text-big margin-0">
              {parseInt(place.population) > 0
                ? formatNumber(place.population)
                : place.population}
            </p>
          </Card>
        ))}
      </Grid>
      {next && <button onClick={handleClick}>Next</button>}
    </Container>
  );
};

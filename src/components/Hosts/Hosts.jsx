import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { Container } from "../Container/Container";
import { Grid } from "../Grid/Grid";
import { getAllHosts } from "../../services/hosts_service";

export const Hosts = () => {
  const [hosts, setHosts] = useState([]);
  useEffect(() => {
    async function fetchHosts() {
      const data = await getAllHosts();
      setHosts(data.results);
    }
    fetchHosts();
  }, []);
  return (
    <Container title="Hosts">
      <Grid columns={4} rows="auto" gap="15px">
        {hosts.map((host) => (
          <Card key={host.name}>
            <h2>{host.name}</h2>
            <div className="featured-group">
              <div className="featured-item">
                Birth year
                <p>{host.birth_year}</p>
              </div>
              <div className="featured-item">
                Gender
                <p>{host.gender}</p>
              </div>
              <div className="featured-item">
                Heigth
                <p>{host.height}</p>
              </div>
            </div>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

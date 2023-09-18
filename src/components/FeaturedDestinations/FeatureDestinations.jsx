import Card from "../Card/Card";
import { Container, titles } from "../Container/Container";
import { Grid } from "../Grid/Grid";

export default function FeatureDestinations({ dataArray }) {
  return (
    <Container
      title={titles.featured.title}
      description={titles.featured.description}
    >
      <Grid type="large" gap="16px" key="1">
        {dataArray.map((element) => (
          <Card type="large" data={element} key={element.id} />
        ))}
      </Grid>
    </Container>
  );
}

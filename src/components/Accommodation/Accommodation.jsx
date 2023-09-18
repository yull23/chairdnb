import Card from "../Card/Card";
import { Container, titles } from "../Container/Container";
import { Grid } from "../Grid/Grid";

export default function Accommodation({ dataArray }) {
  return (
    <Container
      title={titles.accommodation.title}
      description={titles.accommodation.description}
    >
      <Grid type="medium" gap="16px" key="1">
        {dataArray.map((element) => (
          <Card type="medium" data={element} key={element.id} />
        ))}
      </Grid>
    </Container>
  );
}

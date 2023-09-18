import Card from "../Card/Card";
import { Container, titles } from "../Container/Container";
import { Grid } from "../Grid/Grid";

export default function Experiences({ dataArray }) {
  return (
    <Container
      title={titles.experiences.title}
      description={titles.experiences.description}
    >
      <Grid type="small" gap="16px" key="1">
        {dataArray.map((element) => (
          <Card type="small" data={element} key={element.id} />
        ))}
      </Grid>
    </Container>
  );
}

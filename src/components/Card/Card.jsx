import CardSmall from "./Cards/cards-small";
import CardMedium from "./Cards/cards-medium";
import CardLarge from "./Cards/cards-large";

const Card = ({ type, data }) => {
  return (
    <>
      {type == "small" ? <CardSmall data={data} /> : ""}
      {type == "medium" ? <CardMedium data={data} /> : ""}
      {type == "large" ? <CardLarge data={data} /> : ""}
    </>
  );
};
export default Card;

// {
// 	"id": 33,
// 	"name": "Costa Rica",
// 	"country": "Costa Rica",
// 	"rating": 4.5,
// 	"category": "adventure",
// 	"verified_stays": 40,
// 	"start_date": "2023-01-24",
// 	"end_date": "2023-06-24",
// 	"price": "200.0",
// 	"created_at": "2023-03-07T22:50:33.310Z",
// 	"updated_at": "2023-03-07T22:50:33.534Z",
// 	"image_url": "https://picsum.photos/id/1050/640"
// },

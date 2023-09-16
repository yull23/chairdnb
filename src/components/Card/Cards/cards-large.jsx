import "./cards-style.css";
import { days } from "./cards-function";

function CardLarge({ data }) {
  return (
    <div className="card-large">
      <img
        src={data.image_url}
        alt="card-image"
        className="card-large__image"
      />
      <p className="card-large__description">
        more than {data.verified_stays} verified stays
      </p>
      <p className="card-large__description-price">
        From {parseInt(data.price)} € / person - {`${days(data)}`} days
      </p>
    </div>
  );
}

export default CardLarge;

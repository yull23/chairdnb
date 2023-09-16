import "./cards-style.css";
import { days } from "./cards-functions";

function CardMedium({ data }) {
  return (
    <div className="container-medium">
      <div className="card-medium">
        <img
          src={data.image_url}
          alt="card-image"
          className="card-medium__image"
        />
        <div className="card-medium__descriptions">
          <a href="#" className="card-medium-button">
            superhost
          </a>
          <span className="card-medium-city">{data.name}</span>
          <span className="card-medium-rating">* {data.rating}</span>
        </div>

        <p className="card-medium__description-price">
          From {parseInt(data.price)} € / person - {`${days(data)}`} days
        </p>
      </div>
      <div className="card-medium">
        <img
          src={data.image_url}
          alt="card-image"
          className="card-medium__image"
        />
        <div className="card-medium__descriptions">
          <a href="#" className="card-medium-button">
            superhost
          </a>
          <span className="card-medium-city">{data.name}</span>
          <span className="card-medium-rating">* {data.rating}</span>
        </div>

        <p className="card-medium__description-price">
          From {parseInt(data.price)} € / person - {`${days(data)}`} days
        </p>
      </div>
      <div className="card-medium">
        <img
          src={data.image_url}
          alt="card-image"
          className="card-medium__image"
        />
        <div className="card-medium__descriptions">
          <a href="#" className="card-medium-button">
            superhost
          </a>
          <span className="card-medium-city">{data.name}</span>
          <span className="card-medium-rating">* {data.rating}</span>
        </div>

        <p className="card-medium__description-price">
          From {parseInt(data.price)} € / person - {`${days(data)}`} days
        </p>
      </div>
      <div className="card-medium">
        <img
          src={data.image_url}
          alt="card-image"
          className="card-medium__image"
        />
        <div className="card-medium__descriptions">
          <a href="#" className="card-medium-button">
            superhost
          </a>
          <span className="card-medium-city">{data.name}</span>
          <span className="card-medium-rating">* {data.rating}</span>
        </div>

        <p className="card-medium__description-price">
          From {parseInt(data.price)} € / person - {`${days(data)}`} days
        </p>
      </div>
      <div className="card-medium">
        <img
          src={data.image_url}
          alt="card-image"
          className="card-medium__image"
        />
        <div className="card-medium__descriptions">
          <a href="#" className="card-medium-button">
            superhost
          </a>
          <span className="card-medium-city">{data.name}</span>
          <span className="card-medium-rating">* {data.rating}</span>
        </div>

        <p className="card-medium__description-price">
          From {parseInt(data.price)} € / person - {`${days(data)}`} days
        </p>
      </div>
      <div className="card-medium">
        <img
          src={data.image_url}
          alt="card-image"
          className="card-medium__image"
        />
        <div className="card-medium__descriptions">
          <a href="#" className="card-medium-button">
            superhost
          </a>
          <span className="card-medium-city">{data.name}</span>
          <span className="card-medium-rating">* {data.rating}</span>
        </div>

        <p className="card-medium__description-price">
          From {parseInt(data.price)} € / person - {`${days(data)}`} days
        </p>
      </div>
      <div className="card-medium">
        <img
          src={data.image_url}
          alt="card-image"
          className="card-medium__image"
        />
        <div className="card-medium__descriptions">
          <a href="#" className="card-medium-button">
            superhost
          </a>
          <span className="card-medium-city">{data.name}</span>
          <span className="card-medium-rating">* {data.rating}</span>
        </div>

        <p className="card-medium__description-price">
          From {parseInt(data.price)} € / person - {`${days(data)}`} days
        </p>
      </div>
      <div className="card-medium">
        <img
          src={data.image_url}
          alt="card-image"
          className="card-medium__image"
        />
        <div className="card-medium__descriptions">
          <a href="#" className="card-medium-button">
            superhost
          </a>
          <span className="card-medium-city">{data.name}</span>
          <span className="card-medium-rating">* {data.rating}</span>
        </div>

        <p className="card-medium__description-price">
          From {parseInt(data.price)} € / person - {`${days(data)}`} days
        </p>
      </div>
    </div>
  );
}

export default CardMedium;

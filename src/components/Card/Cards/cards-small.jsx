import "./cards-style.css";
import { days } from "./cards-functions";

function CardSmall({ data }) {
  return (
    <div className="container-small">
      <div className="card-small">
        <img
          src={data.image_url}
          alt="card-image"
          className="card-small__image"
        />
        <div className="card-small__descriptions">
          <p className="card-small-country">{data.country}</p>
          <p className="card-small-title">
            {days(data) - 1} Nights PACKAGE All Inclusive
          </p>
        </div>
        <p className="card-small__description-price">
          From {parseInt(data.price)} € / person - {`${days(data)}`} days
        </p>
        <span className="card-small-rating">{data.rating} *</span>
      </div>
      <div className="card-small">
        <img
          src={data.image_url}
          alt="card-image"
          className="card-small__image"
        />
        <div className="card-small__descriptions">
          <p className="card-small-country">{data.country}</p>
          <p className="card-small-title">
            {days(data) - 1} Nights PACKAGE All Inclusive
          </p>
        </div>
        <p className="card-small__description-price">
          From {parseInt(data.price)} € / person - {`${days(data)}`} days
        </p>
        <span className="card-small-rating">{data.rating} *</span>
      </div>
      <div className="card-small">
        <img
          src={data.image_url}
          alt="card-image"
          className="card-small__image"
        />
        <div className="card-small__descriptions">
          <p className="card-small-country">{data.country}</p>
          <p className="card-small-title">
            {days(data) - 1} Nights PACKAGE All Inclusive
          </p>
        </div>
        <p className="card-small__description-price">
          From {parseInt(data.price)} € / person - {`${days(data)}`} days
        </p>
        <span className="card-small-rating">{data.rating} *</span>
      </div>
      <div className="card-small">
        <img
          src={data.image_url}
          alt="card-image"
          className="card-small__image"
        />
        <div className="card-small__descriptions">
          <p className="card-small-country">{data.country}</p>
          <p className="card-small-title">
            {days(data) - 1} Nights PACKAGE All Inclusive
          </p>
        </div>
        <p className="card-small__description-price">
          From {parseInt(data.price)} € / person - {`${days(data)}`} days
        </p>
        <span className="card-small-rating">{data.rating} *</span>
      </div>
      <div className="card-small">
        <img
          src={data.image_url}
          alt="card-image"
          className="card-small__image"
        />
        <div className="card-small__descriptions">
          <p className="card-small-country">{data.country}</p>
          <p className="card-small-title">
            {days(data) - 1} Nights PACKAGE All Inclusive
          </p>
        </div>
        <p className="card-small__description-price">
          From {parseInt(data.price)} € / person - {`${days(data)}`} days
        </p>
        <span className="card-small-rating">{data.rating} *</span>
      </div>
      <div className="card-small">
        <img
          src={data.image_url}
          alt="card-image"
          className="card-small__image"
        />
        <div className="card-small__descriptions">
          <p className="card-small-country">{data.country}</p>
          <p className="card-small-title">
            {days(data) - 1} Nights PACKAGE All Inclusive
          </p>
        </div>
        <p className="card-small__description-price">
          From {parseInt(data.price)} € / person - {`${days(data)}`} days
        </p>
        <span className="card-small-rating">{data.rating} *</span>
      </div>
      <div className="card-small">
        <img
          src={data.image_url}
          alt="card-image"
          className="card-small__image"
        />
        <div className="card-small__descriptions">
          <p className="card-small-country">{data.country}</p>
          <p className="card-small-title">
            {days(data) - 1} Nights PACKAGE All Inclusive
          </p>
        </div>
        <p className="card-small__description-price">
          From {parseInt(data.price)} € / person - {`${days(data)}`} days
        </p>
        <span className="card-small-rating">{data.rating} *</span>
      </div>
      <div className="card-small">
        <img
          src={data.image_url}
          alt="card-image"
          className="card-small__image"
        />
        <div className="card-small__descriptions">
          <p className="card-small-country">{data.country}</p>
          <p className="card-small-title">
            {days(data) - 1} Nights PACKAGE All Inclusive
          </p>
        </div>
        <p className="card-small__description-price">
          From {parseInt(data.price)} € / person - {`${days(data)}`} days
        </p>
        <span className="card-small-rating">{data.rating} *</span>
      </div>
      <div className="card-small">
        <img
          src={data.image_url}
          alt="card-image"
          className="card-small__image"
        />
        <div className="card-small__descriptions">
          <p className="card-small-country">{data.country}</p>
          <p className="card-small-title">
            {days(data) - 1} Nights PACKAGE All Inclusive
          </p>
        </div>
        <p className="card-small__description-price">
          From {parseInt(data.price)} € / person - {`${days(data)}`} days
        </p>
        <span className="card-small-rating">{data.rating} *</span>
      </div>
      <div className="card-small">
        <img
          src={data.image_url}
          alt="card-image"
          className="card-small__image"
        />
        <div className="card-small__descriptions">
          <p className="card-small-country">{data.country}</p>
          <p className="card-small-title">
            {days(data) - 1} Nights PACKAGE All Inclusive
          </p>
        </div>
        <p className="card-small__description-price">
          From {parseInt(data.price)} € / person - {`${days(data)}`} days
        </p>
        <span className="card-small-rating">{data.rating} *</span>
      </div>
      <div className="card-small">
        <img
          src={data.image_url}
          alt="card-image"
          className="card-small__image"
        />
        <div className="card-small__descriptions">
          <p className="card-small-country">{data.country}</p>
          <p className="card-small-title">
            {days(data) - 1} Nights PACKAGE All Inclusive
          </p>
        </div>
        <p className="card-small__description-price">
          From {parseInt(data.price)} € / person - {`${days(data)}`} days
        </p>
        <span className="card-small-rating">{data.rating} *</span>
      </div>
      <div className="card-small">
        <img
          src={data.image_url}
          alt="card-image"
          className="card-small__image"
        />
        <div className="card-small__descriptions">
          <p className="card-small-country">{data.country}</p>
          <p className="card-small-title">
            {days(data) - 1} Nights PACKAGE All Inclusive
          </p>
        </div>
        <p className="card-small__description-price">
          From {parseInt(data.price)} € / person - {`${days(data)}`} days
        </p>
        <span className="card-small-rating">{data.rating} *</span>
      </div>
    </div>
  );
}
export default CardSmall;

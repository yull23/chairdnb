import "./card-styles.css";

function days(data) {
  function newDate(date) {
    let a = date.split("-");
    return new Date(a[0], a[2], a[1]);
  }
  return (
    (newDate(data.end_date) - newDate(data.start_date)) / (1000 * 60 * 60 * 24)
  );
}

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
function CardLarge({ data }) {
  return (
    <div className="container-large">
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
    </div>
  );
}

export { CardLarge, CardMedium, CardSmall };

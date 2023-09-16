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

function CardW200({ data }) {
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

export default CardW200;

import "./Form.css";

export default function Form() {
  return (
    <form action="" className="form">
      <h2 className="form__title">
        Book unique accommodations to code as never before
      </h2>
      <div className="form__inputs">
        <div className="form__component">
          <label htmlFor="where" className="form__label">
            where
          </label>
          <input
            type="text"
            id="where"
            className="form__input input"
            placeholder="Everywhere"
          />
        </div>
        <div className="form__container-dates">
          <div className="form__component">
            <label htmlFor="arrival" className="form__label">
              arrival
            </label>
            <input type="date" className="form__input-arrival input" />
          </div>
          <div className="form__component">
            <label htmlFor="departure" className="form__label">
              departure
            </label>
            <input type="date" className="form__input-departure input" />
          </div>
        </div>
        <div className="form__component">
          <label htmlFor="developers" className="form__label">
            developers
          </label>
          <input type="number" className="form__input input" placeholder="1" />
        </div>
      </div>
      <div className="form__component form__component-button">
        <button className="form__button">search</button>
      </div>
    </form>
  );
}

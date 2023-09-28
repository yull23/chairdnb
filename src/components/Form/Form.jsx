import { useState } from "react";
import "./Form.css";
import { Form, useNavigate, useSearchParams } from "react-router-dom";

export function action() {}

export default function FormSearch() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // console.log(searchParams);
    // Update search parameters in the URL
    formData.forEach((value, key) => {
      searchParams.set(key, value);
    });
    // console.log(searchParams);
    // Navigate to the route with updated parameters
    navigate(`/search?${searchParams.toString()}`);
  };

  return (
    <Form
      id="search-form"
      role="search"
      className="form"
      onSubmit={handleSubmit}
    >
      <h2 className="form__title">
        Book unique accommodations to code as never before
      </h2>
      <div className="form__inputs">
        <div className="form__component">
          <label htmlFor="where" className="form__label">
            where
          </label>
          <input
            id="where"
            type="text"
            name="where"
            placeholder="Everywhere"
            className="form__input input"
          />
        </div>
        <div className="form__container-dates">
          <div className="form__component">
            <label htmlFor="arrival" className="form__label">
              arrival
            </label>
            <input
              id="arrival"
              type="date"
              name="arrival"
              className="form__input-arrival input"
            />
          </div>
          <div className="form__component">
            <label htmlFor="departure" className="form__label">
              departure
            </label>
            <input
              id="depature"
              type="date"
              name="departure"
              className="form__input-departure input"
            />
          </div>
        </div>
        <div className="form__component">
          <label htmlFor="developers" className="form__label">
            developers
          </label>
          <input
            id="count"
            type="number"
            name="count"
            placeholder="1"
            className="form__input input"
          />
        </div>
      </div>
      <div className="form__component form__component-button">
        <button className="form__button">search</button>
      </div>
    </Form>
  );
}

// <Form id="search-form" className="form" onSubmit={handleSubmit}>
//   <input id="q" placeholder="Search" type="text" name="q" />
//   <input id="q2" placeholder="Search" type="text" name="q2" />
//   <button type="submit">Submit</button>
// </Form>

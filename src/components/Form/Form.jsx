import { useState } from "react";
import "./Form.css";
import { Form, useNavigate, useSearchParams } from "react-router-dom";
import { handleSubmit } from "../../routes/Pages/HomePage/HomePage";

export function action() {}

export default function FormSearch() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Actualiza los parámetros de búsqueda en la URL
    formData.forEach((value, key) => {
      searchParams.set(key, value);
    });

    // Navega a la ruta con los parámetros actualizados
    navigate(`/search?${searchParams.toString()}`);
  };

  return (
    <Form id="search-form" className="form" onSubmit={handleSubmit}>
      <input id="q" placeholder="Search" type="text" name="q" />
      <input id="q2" placeholder="Search" type="text" name="q2" />
      <button type="submit">Submit</button>
    </Form>
  );
}

// <Form
//   id="search-form"
//   role="search"
//   className="form"
//   // onSubmit={handleSubmit}
// >
//   <input id="q" placeholder="Search" type="text" name="q" />

//   <h2 className="form__title">
//     Book unique accommodations to code as never before
//   </h2>
//   <div className="form__inputs">
//     <div className="form__component">
//       <label htmlFor="where" className="form__label">
//         where
//       </label>
//       <input
//         type="text"
//         id="where"
//         className="form__input input"
//         placeholder="Everywhere"
//       />
//     </div>
//     <div className="form__container-dates">
//       <div className="form__component">
//         <label htmlFor="arrival" className="form__label">
//           arrival
//         </label>
//         <input
//           type="date"
//           className="form__input-arrival input"
//           id="arrival"
//         />
//       </div>
//       <div className="form__component">
//         <label htmlFor="departure" className="form__label">
//           departure
//         </label>
//         <input
//           type="date"
//           className="form__input-departure input"
//           id="departure"
//         />
//       </div>
//     </div>
//     <div className="form__component">
//       <label htmlFor="developers" className="form__label">
//         developers
//       </label>
//       <input
//         type="number"
//         className="form__input input"
//         placeholder="1"
//         id="developers"
//       />
//     </div>
//   </div>
//   {/* <div className="form__component form__component-button">
//     <button className="form__button">search</button>
//   </div> */}
// </Form>;

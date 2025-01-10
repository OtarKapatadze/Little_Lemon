// import { useState, useEffect, useRef } from "react";
// import { Formik } from "formik";
// import { object, string, number, date, InferType } from "yup";

export default function Reservation({ title = "Reserve a Table" }) {
  return (
    <>
      <section className="router-section router-reservation">
        <h1>{title}</h1>
        {/* <Formik> */}
        <form>
          <label htmlFor="res-date" className="label">
            Choose date
          </label>
          <input type="date" id="res-date" />
          <label htmlFor="res-time" className="label">
            Choose time
          </label>
          <input type="time" id="res-time" min="09:00" max="18:00" required />
          <label htmlFor="guests" className="label">
            Number of guests
          </label>
          <input type="number" placeholder="1" min="1" max="10" id="guests" />
          <label htmlFor="occasion" className="label">
            Occasion
          </label>
          <select id="occasion">
            <option value={"Birthday"}>Birthday</option>
            <option value={"Anniversary"}>Anniversary</option>
            <option value={"Friends"}>Friends</option>
          </select>
          <label htmlFor="email" className="label">
            Email
          </label>
          <input type="email" placeholder="....@mail.com" name="" id="email" />
          <input className="button" type="submit" value="SUBMIT" />
        </form>
        {/* </Formik> */}
      </section>
    </>
  );
}

//   return (
//     <>
//       <section className="router-section router-reservation">
//         <form>
//           <label htmlFor="res-date">Choose date</label>
//           <input type="date" id="res-date" />
//           <label htmlFor="res-time">Choose time</label>
//           <input type="time" id="res-time" min="09:00" max="18:00" required />
//           <label htmlFor="guests">Number of guests</label>
//           <input type="number" placeholder="1" min="1" max="10" id="guests" />
//           <label htmlFor="occasion">Occasion</label>
//           <select
//             value={occasion}
//             onChange={handleOccasionChange}
//             id="occasion"
//           >
//             <option value={"Birthday"}>Birthday</option>
//             <option value={"Anniversary"}>Anniversary</option>
//             <option value={"Friends"}>Friends</option>
//           </select>
//           <input className="button" type="submit" value="SUBMIT" />
//         </form>
//         {children}
//       </section>
//     </>
//   );
// }

//  <>
//     <section className="router-section router-reservation">
//       <form>
//         <label htmlFor="res-date" className="label">
//           Choose date
//         </label>
//         <input type="date" id="res-date" />
//         <label htmlFor="res-time" className="label">
//           Choose time
//         </label>
//         <input type="time" id="res-time" min="09:00" max="18:00" required />
//         <label htmlFor="guests" className="label">
//           Number of guests
//         </label>
//         <input type="number" placeholder="1" min="1" max="10" id="guests" />
//         <label htmlFor="occasion" className="label">
//           Occasion
//         </label>
//         <select
//           value={occasion}
//           onChange={handleOccasionChange}
//           id="occasion"
//         >
//           <option value={"Birthday"}>Birthday</option>
//           <option value={"Anniversary"}>Anniversary</option>
//           <option value={"Friends"}>Friends</option>
//         </select>
//         <label htmlFor="email" className="label">
//           Email
//         </label>
//         <input placeholder="Email" type="email" />
//         <input className="button" type="submit" value="SUBMIT" />
//       </form>
//       {children}
//     </section>
//   </>
// );

// import React, { useState, useEffect } from "react";
// import ExampleComponents from "../Examples";
// import DatePicker from "react-datepicker";

// const Example = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [startDate, setStartDate] = useState(new Date());
//   const [isScrolled, setIsScrolled] = useState(true);

//   useEffect(() => {
//     document.addEventListener("scroll", handleScroll);
//   }, []);

//   const handleScroll = () => {
//     const Show = window.scrollY < 400;
//     if (Show) {
//       setIsScrolled(true);
//     } else {
//       setIsScrolled(false);
//     }
//   };

//   return (
//     <DatePicker
//       open={isOpen && isScrolled}
//       selected={startDate}
//       onChange={(date) => {
//         setStartDate(date);
//         setIsOpen(false);
//       }}
//       onInputClick={() => setIsOpen(true)}
//     />
//   );
// };

// export default Root = () => (
//   <div>
//     <div className="">
//       <div className="">
//         <h1 className="">React prueba</h1>
//         <div className="">
//           <a href="https://hackerone.com" className="">
//             hechopor by <img className="" alt="HackerOne" title="HackerOne" />
//           </a>
//         </div>
//         <div className="">
//           <Example />
//         </div>
//       </div>
//     </div>
//   </div>
// );



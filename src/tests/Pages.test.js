// import { render, screen } from "@testing-library/react";
// import { BrowserRouter as Router } from "react-router-dom";
// import Home from "../components/Home/Home";
// import Error from "../components/Error/Error";
// import FullPost from "../components/FullPost/FullPost";
//
// //This tests if the home page appears
// describe("The home component", () => {
//   test("it renders", () => {
//     render(
//       <Router>
//         <Home />
//       </Router>
//     );
//
//     expect(screen.getByText("Twitbook")).toBeInTheDocument();
//   });
// });
//
// //This tests if the error page appears
// describe("The error component", () => {
//   test("it renders the error page", () => {
//     render(
//       <Router>
//         <Error />
//       </Router>
//     );
//
//     expect(screen.getByText("Back home")).toBeInTheDocument();
//   });
// });
//
// //This tests if the full post page appears
// describe("The error component", () => {
//   test("it renders the error page", () => {
//     render(
//       <Router>
//         <FullPost />
//       </Router>
//     );
//
//     expect(screen.getByTestId("fullpost")).toBeInTheDocument();
//   });
// });

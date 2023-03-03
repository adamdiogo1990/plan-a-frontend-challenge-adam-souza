import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MoviePage from "./pages/MoviePage";
import GlobalStyle from "./styles/GlobalStyle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/movies",
    element: <MoviePage />,
  },
]);

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
    
  );
};

export default App;
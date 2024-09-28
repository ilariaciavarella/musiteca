import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./assets/styles/App.scss";

import Root from "./routes/Root.jsx";
import Error from "./routes/error/Error.jsx";
import Login from "./routes/login/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

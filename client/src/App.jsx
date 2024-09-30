import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";

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
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#4930AA",
          fontFamily: "'Public Sans', sans-serif, system-ui",
        },
        components: {
          Button: {
            fontWeight: 600,
            lineWidth: 2,
          },
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;

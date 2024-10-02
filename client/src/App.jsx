import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";

import "./assets/styles/App.scss";

import Root from "./routes/Root.jsx";
import Error from "./routes/error/Error.jsx";
import Login from "./routes/login/Login.jsx";
import { useEffect, useState } from "react";

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
  const [fontSize, setFontSize] = useState(
    (0.390625 * window.innerWidth) / 100 + 13,
  );
  useEffect(() => {
    window.addEventListener("resize", () => {
      setFontSize((0.390625 * window.innerWidth) / 100 + 13);
      console.log(fontSize);
    });
  }, []);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#4930AA",
          colorTextBase: "#120C2A",
          colorBgBase: "#F9FAED",
          fontFamily: "'Public Sans', sans-serif, system-ui",
          fontSize: fontSize,
          borderRadius: 8,
        },
        components: {
          Button: {
            contentFontSize: fontSize,
            contentFontSizeLG: fontSize + 4,
            defaultShadow: "4px 4px 0 rgba(0, 0, 0, 0.25)",
            fontWeight: 600,
            primaryShadow: "4px 4px 0 rgba(0, 0, 0, 0.25)",
            controlHeight: 48,
            controlHeightLG: 52,
            controlHeightSM: 40,
            lineWidth: 2,
            colorLink: "#4930AA",
            colorLinkActive: "#2E1E6A",
            colorLinkHover: "#7760D2",
          },
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;

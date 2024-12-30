import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";

import "./assets/global-styles/App.scss";

import Root, { loader as rootLoader } from "./routes/Root.jsx";
import Error from "./routes/error/Error.jsx";
import Home, { loader as postsLoader } from "./routes/home/Home.jsx";
import Borrowed, {
  loader as borrowedPostsLoader,
} from "./routes/borrowed/Borrowed.jsx";
import Login from "./routes/auth/login/Login.jsx";
import Auth from "./routes/auth/Auth.jsx";
import SignUp from "./routes/auth/sign-up/SignUp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    loader: rootLoader,
    children: [
      {
        index: true,
        element: <Home />,
        loader: postsLoader,
      },
      {
        path: "/borrowed",
        element: <Borrowed />,
        loader: borrowedPostsLoader,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    errorElement: <Error />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
]);

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#4930AA",
          colorText: "#120C2A",
          colorBgBase: "#F9FAED",
          colorError: "#CE1C4B",
          colorLink: "#2E1E6A",
          fontFamily: "'Public Sans', sans-serif, system-ui",
          fontSize: 16,
          borderRadius: 8,
        },
        components: {
          Layout: {
            siderBg: "#E2EE00",
            bodyBg: "#F9FAED",
            headerBg: "#4930AA",
          },
          Button: {
            contentFontSize: 16,
            contentFontSizeLG: 20,
            defaultBg: "none",
            defaultShadow: "4px 4px 0 rgba(0, 0, 0, 0.25)",
            fontWeight: 600,
            primaryShadow: "4px 4px 0 rgba(0, 0, 0, 0.25)",
            controlHeight: 48,
            controlHeightLG: 52,
            controlHeightSM: 40,
            lineWidth: 2,
          },
          Input: {
            controlHeight: 48,
            controlHeightLG: 52,
            controlHeightSM: 40,
            colorBorder: "#120C2A",
            colorBgContainer: "rgba(249,250,237,0.7)",
            colorTextPlaceholder: "rgba(18, 12, 42, 0.5)",
            colorText: "#120C2A",
          },
          InputNumber: {
            controlHeight: 48,
            controlHeightLG: 52,
            controlHeightSM: 40,
            colorBorder: "#120C2A",
            colorBgContainer: "rgba(249,250,237,0.7)",
            colorTextPlaceholder: "rgba(18, 12, 42, 0.5)",
            colorText: "#120C2A",
          },
          Alert: {
            colorText: "#120C2A",
            colorTextHeading: "#120C2A",
            colorErrorBg: "rgba(255,240,241,0.7)",
          },
          Menu: {
            itemBg: "#E2EE00",
            itemColor: "#120C2A",
            colorSplit: "transparent",
          },
        },
      }}
      button={{
        className: "btn",
      }}
      modal={{
        classNames: {
          content: "modal-content",
        },
      }}
      input={{
        className: "input",
      }}
      card={{
        className: "card",
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;

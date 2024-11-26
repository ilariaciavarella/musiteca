import { Col, ConfigProvider, Layout, Row } from "antd";
const { Content } = Layout;

import styles from "./Auth.module.scss";

import LogoLight from "../../assets/images/logo/musiteca-logo_light.svg";
import loginImage from "../../assets/images/illustrations/musiteca-login_illustration.png";
import MusitecaFooter from "../../components/footer/MusitecaFooter.jsx";
import { Outlet } from "react-router-dom";

function Auth(props) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#E2EE00",
          colorText: "#F9FAED",
          colorBgBase: "#4930AA",
          colorError: "#CE1C4B",
          colorLink: "#E2EE00",
        },
        components: {
          Button: {
            primaryColor: "#120C2A",
          },
        },
      }}
    >
      <Layout style={{ backgroundColor: "#4930AA" }}>
        <Content className={styles["container"]}>
          <Row gutter={[24, 12]} align="middle" justify="center">
            <Col xs={24} md={12} xl={10}>
              <img
                src={LogoLight}
                alt="Musiteca Logo"
                className={styles["musiteca-logo"]}
              />
              <h1>The Library of Musical Instruments</h1>
              <p>
                <big>
                  Access a shared library of musical instruments&nbsp;— Borrow
                  what you need, lend what you can.
                </big>
              </p>
              <img
                src={loginImage}
                alt="Illustration of guitarist playing their instrument"
                className={styles["login-image"]}
              />
            </Col>
            <Col xs={24} md={12} xl={10}>
              <Outlet />
            </Col>
          </Row>
        </Content>
        <MusitecaFooter light={true} />
      </Layout>
    </ConfigProvider>
  );
}

export default Auth;

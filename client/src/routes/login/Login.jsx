import { ConfigProvider, Layout, Row, Col, Form, Input, Button } from "antd";
const { Content } = Layout;

import styles from "./Login.module.scss";

import MusitecaFooter from "../../components/footer/MusitecaFooter.jsx";

import LogoLight from "../../assets/images/logo/musiteca-logo_light.svg";
import loginImage from "../../assets/images/illustrations/musiteca-login_illustration.png";

function Login(props) {
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
              <div className={styles["login-container"]}>
                <h2>Sign in to Musiteca</h2>
                <Form layout="vertical" requiredMark={false}>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please, insert your email",
                      },
                    ]}
                    className={styles["login-item"]}
                  >
                    <Input
                      placeholder="Type your email"
                      className={styles["login-input"]}
                    />
                  </Form.Item>
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please, insert your password",
                      },
                    ]}
                    className={styles["login-item"]}
                  >
                    <Input.Password
                      placeholder="Enter your password"
                      className={styles["login-input"]}
                    />
                  </Form.Item>
                  <Form.Item className={styles["login-button"]}>
                    <Button block type="primary" htmlType="submit">
                      Login
                    </Button>
                  </Form.Item>
                  <Form.Item>
                    <Button block type="link" href="/forgot-password">
                      Forgot password?
                    </Button>
                  </Form.Item>
                </Form>
              </div>
              <div className={styles["login-container"]}>
                <h4>Don’t have an account?</h4>
                <Button
                  block
                  type="default"
                  className="btn-light"
                  href="/sign-up"
                >
                  Sign up
                </Button>
              </div>
            </Col>
          </Row>
        </Content>
        <MusitecaFooter light={true} />
      </Layout>
    </ConfigProvider>
  );
}

export default Login;

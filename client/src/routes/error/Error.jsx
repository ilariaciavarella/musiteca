import { useEffect } from "react";
import { useRouteError } from "react-router-dom";
import { Layout, Row, Col, Button } from "antd";

const { Content } = Layout;

import styles from "./error.module.scss";

import MusitecaFooter from "../../components/footer/MusitecaFooter.jsx";

import errorImage from "../../assets/images/illustrations/musiteca-error_illustration.png";
import LogoDark from "../../assets/images/logo/musiteca-logo_dark.svg";

function Error() {
  const error = useRouteError();

  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <Layout style={{ backgroundColor: "#E2EE00" }}>
      <Content className={styles["container"]}>
        <Row
          gutter={24}
          align="middle"
          justify="center"
          className={styles["container-row"]}
        >
          <Col xs={24} md={12} xl={10}>
            <img
              src={LogoDark}
              alt="Musiteca Logo"
              className={styles["musiteca-logo"]}
            />
            <h1>Oops, something went wrong...</h1>
            <p className={styles["error-msg"]}>
              <small>{error.statusText || error.message}</small>
            </p>
            <p>
              Sorry, an unexpected error has occurred.
              <br />
              Return to the home and explore other possibilities.
            </p>
            <Button type="primary" href="/" className="btn">
              Go back home
            </Button>
          </Col>
          <Col xs={24} md={12} xl={10}>
            <img
              src={errorImage}
              alt="Illustration of a record player with a broken vynil"
              className={styles["error-image"]}
            />
          </Col>
        </Row>
      </Content>
      <MusitecaFooter light={false} />
    </Layout>
  );
}

export default Error;

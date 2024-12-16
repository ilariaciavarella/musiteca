import { Outlet } from "react-router-dom";
import { Col, Layout, Row } from "antd";

import MusitecaHeader from "../components/header/MusitecaHeader.jsx";
import MusitecaAside from "../components/aside/MusitecaAside.jsx";

function Root() {
  return (
    <Layout
      style={{
        maxHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <Row>
        <Col xs={24} md={7} lg={5}>
          <MusitecaHeader />
        </Col>
        <Col xs={24} md={17} lg={14}>
          <Outlet />
        </Col>
        <Col xs={0} lg={5}>
          <MusitecaAside />
        </Col>
      </Row>
    </Layout>
  );
}

export default Root;

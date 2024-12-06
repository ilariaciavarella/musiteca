import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Col, Layout, Row } from "antd";

import MusitecaHeader from "../components/header/MusitecaHeader.jsx";

function Root() {
  const [showNav, setShowNav] = useState(true);

  function toggleNav() {
    setShowNav((prevShowNav) => !prevShowNav);
  }

  return (
    <Layout>
      <Row>
        <Col xs={24} md={8} lg={6}>
          <MusitecaHeader />
        </Col>
        <Col xs={24} md={18} lg={12}>
          <Outlet />
        </Col>
        <Col xs={0} lg={6}></Col>
      </Row>
    </Layout>
  );
}

export default Root;

import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Col, Layout, Row } from "antd";

import MusitecaHeader from "../components/header/MusitecaHeader.jsx";
import MusitecaAside from "../components/aside/MusitecaAside.jsx";
import PostForm from "../components/post-form/PostForm.jsx";

function Root() {
  const [isFormOpen, setIsFormOpen] = useState(true);

  function openPostForm() {
    setIsFormOpen(true);
  }

  function handlePostFormConfirm() {
    setIsFormOpen(false);
  }
  function handlePostFormCancel() {
    setIsFormOpen(false);
  }

  return (
    <>
      <Layout
        style={{
          maxHeight: "100vh",
          overflow: "hidden",
        }}
      >
        <Row>
          <Col xs={24} md={7} lg={5}>
            <MusitecaHeader openPostForm={openPostForm} />
          </Col>
          <Col xs={24} md={17} lg={14}>
            <Outlet context={openPostForm} />
          </Col>
          <Col xs={0} lg={5}>
            <MusitecaAside />
          </Col>
        </Row>
      </Layout>
      <PostForm
        isFormOpen={isFormOpen}
        handlePostFormCancel={handlePostFormCancel}
        handlePostFormConfirm={handlePostFormConfirm}
      />
    </>
  );
}

export default Root;

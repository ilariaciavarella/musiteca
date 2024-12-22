import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Col, Layout, Row } from "antd";
import axios from "axios";
import MusitecaHeader from "../components/header/MusitecaHeader.jsx";
import MusitecaAside from "../components/aside/MusitecaAside.jsx";
import PostForm from "../components/post-form/PostForm.jsx";

function Root() {
  const token = localStorage.getItem("authToken");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUser({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
        });
      });
  }, [token]);

  function openPostForm() {
    setIsFormOpen(true);
  }

  function closePostForm() {
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
            <Outlet context={[setIsFormOpen, user]} />
          </Col>
          <Col xs={0} lg={5}>
            <MusitecaAside />
          </Col>
        </Row>
      </Layout>
      <PostForm isFormOpen={isFormOpen} handleClose={closePostForm} />
    </>
  );
}

export default Root;

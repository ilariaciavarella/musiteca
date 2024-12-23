import { useState } from "react";
import { Outlet, redirect, useLoaderData } from "react-router-dom";
import { Col, Layout, Row } from "antd";
import axios from "axios";
import MusitecaHeader from "../components/header/MusitecaHeader.jsx";
import MusitecaAside from "../components/aside/MusitecaAside.jsx";
import PostForm from "../components/post-form/PostForm.jsx";

export async function loader() {
  const token = localStorage.getItem("authToken");
  if (token) {
    const loggedUser = await axios.get("http://localhost:8080/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return { loggedUser };
  } else {
    return redirect("http://localhost:5173/auth/login");
  }
}

function Root() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { loggedUser } = useLoaderData();
  const user = {
    firstName: loggedUser.data.firstName,
    lastName: loggedUser.data.lastName,
  };

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

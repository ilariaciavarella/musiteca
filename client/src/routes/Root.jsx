import { useState } from "react";
import { Outlet, redirect, useLoaderData } from "react-router-dom";
import axios from "axios";
import { Col, Layout, Row } from "antd";
import MusitecaHeader from "../components/header/MusitecaHeader.jsx";
import MusitecaAside from "../components/aside/MusitecaAside.jsx";
import PostForm from "../components/post-form/PostForm.jsx";

export async function loader() {
  const token = localStorage.getItem("authToken");

  if (!token) {
    return redirect("/auth/login");
  }

  return await axios
    .get(`${import.meta.env.VITE_API_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      localStorage.setItem("currentUserEmail", response.data.email);
      return { loggedUser: response.data };
    })
    .catch((error) => {
      console.error(error);
      return redirect("/auth/login");
    });
}

function Root() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { loggedUser } = useLoaderData();
  const user = {
    firstName: loggedUser.firstName,
    lastName: loggedUser.lastName,
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

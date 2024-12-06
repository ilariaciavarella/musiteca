import styles from "../Auth.module.scss";
import { Button, Form, Input, Row, Col, Alert, Modal } from "antd";
import axios from "axios";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

function SignUp() {
  const [isValid, setIsValid] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [isModalOpen, setIsModalOpen] = useOutletContext();

  function handleFinish({ firstName, lastName, email, password, location }) {
    axios
      .post(
        "http://localhost:8080/auth/signup",
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          location: location,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
      .then((response) => {
        console.log(response);
        setIsValid(true);
        setIsModalOpen(true);
      })
      .catch((err) => {
        console.log(err);
        setIsValid(false);
        setErrorMsg(err.response.data.description);
        setIsModalOpen(false);
      });
  }

  return (
    <>
      <div className={styles["login-container"]}>
        <h2>Sign up to Musiteca</h2>
        {!isValid && (
          <Alert
            className={styles["error-msg"]}
            message={errorMsg}
            type="error"
            showIcon
          />
        )}
        <Form
          layout="vertical"
          requiredMark={false}
          onFinish={(values) => {
            handleFinish(values);
          }}
        >
          <Row gutter={12}>
            <Col xs={24} lg={12}>
              <Form.Item
                label="First name"
                name="firstName"
                rules={[
                  {
                    required: true,
                    message: "Please, provide your first name",
                    min: 1,
                    whitespace: true,
                  },
                ]}
                className={styles["login-item"]}
              >
                <Input placeholder="Emily" />
              </Form.Item>
            </Col>
            <Col xs={24} lg={12}>
              <Form.Item
                label="Last name"
                name="lastName"
                rules={[
                  {
                    required: true,
                    message: "Please, provide your last name",
                    min: 1,
                    whitespace: true,
                  },
                ]}
                className={styles["login-item"]}
              >
                <Input placeholder="Armstrong" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={12}>
            <Col xs={24} lg={12}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please, insert your email",
                    type: "email",
                  },
                ]}
                className={styles["login-item"]}
              >
                <Input placeholder="emily.a@gmail.com" />
              </Form.Item>
            </Col>
            <Col xs={24} lg={12}>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Your password must be 8 characters or longer",
                    min: 8,
                  },
                ]}
                className={styles["login-item"]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            label="Location"
            name="location"
            rules={[
              {
                required: true,
                message: "Please, insert your city",
                min: 1,
                whitespace: true,
              },
            ]}
            className={styles["login-item"]}
          >
            <Input placeholder="Rome" />
          </Form.Item>
          <Form.Item className={styles["login-button"]}>
            <Button block type="primary" htmlType="submit">
              Sign up
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className={styles["login-container"]}>
        <h4>Already have an account?</h4>
        <Button block type="default" className="btn-light" href="login">
          Login
        </Button>
      </div>
    </>
  );
}

export default SignUp;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Input, Button, Alert } from "antd";
import styles from "../auth.module.scss";

function Login() {
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  function loginFormSubmit({ email, password }) {
    axios
      .post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
      .then((response) => {
        console.log(response.status);
        setIsValid(true);
        localStorage.setItem("authToken", response.data.token);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        setIsValid(false);
        setErrorMsg(error.response.data.description);
      });
  }

  return (
    <>
      <div className={styles["login-container"]}>
        <h2>Login to Musiteca</h2>
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
            loginFormSubmit(values);
          }}
        >
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
            <Input placeholder="emily.a@gmail.com" type="email" />
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
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item className={styles["login-button"]}>
            <Button block type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className={styles["login-container"]}>
        <h4>Don’t have an account?</h4>
        <Button block type="default" className="btn-light" href="sign-up">
          Sign up
        </Button>
      </div>
    </>
  );
}

export default Login;

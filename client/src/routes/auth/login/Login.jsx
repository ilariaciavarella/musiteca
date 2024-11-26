import { Form, Input, Button } from "antd";

import styles from "../Auth.module.scss";
import axios from "axios";

function loginFormSubmit({ email, password }) {
  axios
    .post(
      "http://localhost:8080/auth/login",
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
      console.log(response);
    });
}

function Login(props) {
  return (
    <>
      <div className={styles["login-container"]}>
        <h2>Login to Musiteca</h2>
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
        <Button block type="default" className="btn-light" href="sign-up">
          Sign up
        </Button>
      </div>
    </>
  );
}

export default Login;

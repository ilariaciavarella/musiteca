import styles from "../Auth.module.scss";
import { Button, Form, Input, Row, Col } from "antd";
import axios from "axios";

function signupFormSubmit({ firstName, lastName, email, password, location }) {
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
    });
}

function SignUp(props) {
  return (
    <>
      <div className={styles["login-container"]}>
        <h2>Sign up to Musiteca</h2>
        <Form
          layout="vertical"
          requiredMark={false}
          onFinish={(values) => {
            signupFormSubmit(values);
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
                  },
                ]}
                className={styles["login-item"]}
              >
                <Input placeholder="Emily" className={styles["login-input"]} />
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
                  },
                ]}
                className={styles["login-item"]}
              >
                <Input
                  placeholder="Armstrong"
                  className={styles["login-input"]}
                />
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
                  },
                ]}
                className={styles["login-item"]}
              >
                <Input
                  placeholder="Type your email"
                  className={styles["login-input"]}
                />
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
                <Input.Password
                  placeholder="Enter your password"
                  className={styles["login-input"]}
                />
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
              },
            ]}
            className={styles["login-item"]}
          >
            <Input placeholder="Rome" className={styles["login-input"]} />
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

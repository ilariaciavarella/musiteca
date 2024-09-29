import { useEffect } from "react";

import styles from "./Login.module.scss";
import setBodyBgColor from "../../assets/utils/setBodyBgColour.js";
import LogoLight from "../../assets/images/logo/musiteca-logo_light.svg";
import FooterRegular from "../../components/footer/footer-regular.jsx";
import LinkButton from "../../components/button/link-button.jsx";
import ActionButton from "../../components/button/action-button.jsx";

function Login(props) {
  useEffect(() => {
    setBodyBgColor("#4930AA");
  }, []);

  return (
    <>
      <main className={styles["container"]}>
        <div>
          <img
            src={LogoLight}
            alt="Musiteca Logo"
            className={styles["musiteca-logo"]}
          />
          <h1>The Library of Musical Instruments</h1>
          <p>
            <big>
              Access a shared library of musical instruments&nbsp;— Borrow what
              you need, lend what you can.
            </big>
          </p>
        </div>
        <div>
          <div>
            <h2>Sign in to Musiteca</h2>
            <form>
              <label>
                Email
                <input />
              </label>
              <label>
                Password
                <input />
              </label>
              <ActionButton text="Login" type="primary" />
              <LinkButton
                href="/forgot"
                text="Forgot password?"
                type="tertiary"
              />
            </form>
          </div>
          <div>
            <h4>Don’t have an account?</h4>
            <LinkButton href={"/signup"} text={"Sign up"} type={"secondary"} />
          </div>
        </div>
      </main>
      <FooterRegular light={true} />
    </>
  );
}

export default Login;

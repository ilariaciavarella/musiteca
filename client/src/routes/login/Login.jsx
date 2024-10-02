import { useEffect } from "react";

import styles from "./Login.module.scss";
import setBodyBgColor from "../../assets/utils/setBodyBgColour.js";
import LogoLight from "../../assets/images/logo/musiteca-logo_light.svg";
import FooterRegular from "../../components/footer/footer-regular.jsx";

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
          <div className={styles["login-container"]}>
            <h2>Sign in to Musiteca</h2>
            <form>
              <div className={styles["input-element"]}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <div className={styles["input-element"]}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
            </form>
          </div>
          <div className={styles["login-container"]}>
            <h4>Don’t have an account?</h4>
          </div>
        </div>
      </main>
      <FooterRegular light={true} />
    </>
  );
}

export default Login;

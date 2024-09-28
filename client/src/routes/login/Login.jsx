import { useEffect } from "react";

import "./Login.scss";
import setBodyBgColor from "../../assets/utils/setBodyBgColour.js";
import LogoLight from "../../assets/images/logo/musiteca-logo_light.svg";
import FooterRegular from "../../components/footer/footer-regular.jsx";
import LinkButton from "../../components/button/link-button.jsx";

function Login(props) {
  useEffect(() => {
    setBodyBgColor("#4930AA");
  }, []);

  return (
    <>
      <main className="container">
        <div>
          <img src={LogoLight} alt="Musiteca Logo" className="musiteca-logo" />
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
            <form></form>
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

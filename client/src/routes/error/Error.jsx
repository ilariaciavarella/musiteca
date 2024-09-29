import { useEffect } from "react";
import { useRouteError } from "react-router-dom";

import styles from "./Error.module.scss";
import setBodyBgColor from "../../assets/utils/setBodyBgColour.js";

import FooterRegular from "../../components/footer/footer-regular.jsx";
import LinkButton from "../../components/button/link-button.jsx";

import errorImage from "../../assets/images/illustrations/musiteca-error_illustration.png";
import LogoDark from "../../assets/images/logo/musiteca-logo_dark.svg";

function Error() {
  const error = useRouteError();

  useEffect(() => {
    setBodyBgColor("#E2EE00");
    console.log(error);
  }, [error]);

  return (
    <>
      <main className={styles["container"]}>
        <div>
          <img
            src={LogoDark}
            alt="Musiteca Logo"
            className={styles["musiteca-logo"]}
          />
          <h1>Oops, something went wrong...</h1>
          <p className={styles["error-msg"]}>
            <small>{error.statusText || error.message}</small>
          </p>
          <p>
            Sorry, an unexpected error has occurred.
            <br />
            Return to the home and explore other possibilities.
          </p>
          <LinkButton href="/" text="Go back home" type="primary-purple" />
        </div>
        <figure>
          <img
            src={errorImage}
            alt="Illustration of a record player with a broken vynil"
            className={styles["error-image"]}
          />
        </figure>
      </main>
      <FooterRegular light={false} />
    </>
  );
}

export default Error;

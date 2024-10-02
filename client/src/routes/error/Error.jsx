import { useEffect } from "react";
import { useRouteError } from "react-router-dom";
import { Button } from "antd";

import styles from "./Error.module.scss";
import setBodyBgColor from "../../assets/utils/setBodyBgColour.js";

import MusitecaFooter from "../../components/footer/MusitecaFooter.jsx";

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
          <Button type="primary" href="/" className="btn">
            Go back home
          </Button>
        </div>
        <figure>
          <img
            src={errorImage}
            alt="Illustration of a record player with a broken vynil"
            className={styles["error-image"]}
          />
        </figure>
      </main>
      <MusitecaFooter light={false} />
    </>
  );
}

export default Error;

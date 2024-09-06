import { useEffect } from "react";
import { useRouteError } from "react-router-dom";

import "./Error.scss";

import FooterRegular from "../../components/footer/footer-regular.jsx";
import LinkButton from "../../components/button/link-button.jsx";

import errorImage from "../../assets/images/illustrations/musiteca-error_illustration.png";

function Error() {
  const error = useRouteError();
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <>
      <main>
        <div>
          <div>
            <h1>Oops, something went wrong...</h1>
            <small>{error.statusText || error.message}</small>
            <p>
              Sorry, an unexpected error has occurred.
              <br />
              Return to the home and explore other possibilities.
            </p>
            <LinkButton href="/" text="Go back home" type="primary" />
          </div>
          {/*<figure>*/}
          {/*  <img*/}
          {/*    src={errorImage}*/}
          {/*    alt="Illustration of a computer that is not working"*/}
          {/*  />*/}
          {/*</figure>*/}
        </div>
      </main>
      <FooterRegular light={false} />
    </>
  );
}

export default Error;

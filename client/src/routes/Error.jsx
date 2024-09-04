import { useEffect } from "react";
import { useRouteError } from "react-router-dom";

import errorImage from "../assets/images/musiteca-error_illustration.jpg";

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
            <a href="/">Go back home</a>
          </div>
          <figure>
            <img
              src={errorImage}
              alt="Illustration of a computer that is not working"
            />
          </figure>
        </div>
      </main>
    </>
  );
}

export default Error;

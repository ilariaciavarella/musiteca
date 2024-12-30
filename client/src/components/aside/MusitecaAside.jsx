import MusitecaFooter from "../footer/MusitecaFooter.jsx";

import "./aside.scss";

function MusitecaAside() {
  return (
    <aside>
      <div className="aside-description">
        <h4>Welcome to Musiteca!</h4>
        <p>
          Musiteca connects musicians looking to share or borrow instruments.
        </p>
        <p>
          Have one collecting dust? Lend it to someone who’ll play it. Curious
          to try a new instrument without the cost of buying? Explore the
          catalog to find your next inspiration.
        </p>
        <p>Join the community and make music more accessible!</p>
      </div>
      <MusitecaFooter />
    </aside>
  );
}

export default MusitecaAside;

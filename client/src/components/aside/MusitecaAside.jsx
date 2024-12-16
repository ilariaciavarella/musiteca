import MusitecaFooter from "../footer/MusitecaFooter.jsx";

import "./aside.scss";
import { Button } from "antd";

function MusitecaAside() {
  return (
    <aside>
      <div className="recent-researches">
        <h4>Recent researches</h4>
        <ul>
          <li>
            <Button type="link" className="btn-link btn-small">
              Chitarra
            </Button>
          </li>
          <li>
            <Button type="link" className="btn-link btn-small">
              Chitarra
            </Button>
          </li>
          <li>
            <Button type="link" className="btn-link btn-small">
              Chitarra
            </Button>
          </li>
          <li>
            <Button type="link" className="btn-link btn-small">
              Chitarra
            </Button>
          </li>
        </ul>
      </div>
      <MusitecaFooter />
    </aside>
  );
}

export default MusitecaAside;

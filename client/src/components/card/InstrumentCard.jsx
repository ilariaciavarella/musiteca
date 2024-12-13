import { Avatar, Button, Flex } from "antd";
import PropTypes from "prop-types";

import "./card.scss";
import { MusicNotes, ShareFat } from "@phosphor-icons/react";
import { useState } from "react";

function InstrumentCard(props) {
  const [showInstrumentDetails, setShowInstrumentDetails] = useState(false);

  function toggleInstrumentDetails() {
    setShowInstrumentDetails((prevState) => !prevState);
  }

  return (
    <div className="card">
      <img src="https://picsum.photos/600/800" className="instrument-image" />
      <div className="post-content">
        <div>
          <div className="post-details">
            <Avatar src={props.userPic} shape="square" size={52}>
              {props.userName.slice(0, 1)}
            </Avatar>
            <div>
              <div className="post-author">{props.userName}</div>
              <div>
                {`${props.createdTime}m • `}
                <strong>{`${props.userLocation}`}</strong>
              </div>
            </div>
          </div>
          <p>
            Cupcake ipsum dolor sit amet chupa chups toffee donut. Gingerbread
            gingerbread tart I love oat cake apple pie fruitcake cotton candy.
            Chocolate bar gingerbread cake I love wafer muffin.
          </p>
          <Button
            type="link"
            className="btn-invisible-small"
            onClick={toggleInstrumentDetails}
          >
            Show details
          </Button>
          {showInstrumentDetails && (
            <ul>
              <li>
                <strong>Instrument:</strong>
              </li>
              <li>
                <strong>Brand:</strong>
              </li>
              <li>
                <strong>Age:</strong>
              </li>
            </ul>
          )}
        </div>
        <Flex gap="middle" className="post-actions">
          <Button icon={<ShareFat size={28} />} />
          <Button
            type="primary"
            className="main-action"
            icon={<MusicNotes size={28} />}
          >
            Borrow
          </Button>
        </Flex>
      </div>
    </div>
  );
}

export default InstrumentCard;

InstrumentCard.propTypes = {
  userName: PropTypes.string,
  userPic: PropTypes.string,
  createdTime: PropTypes.number,
  userLocation: PropTypes.string,
};

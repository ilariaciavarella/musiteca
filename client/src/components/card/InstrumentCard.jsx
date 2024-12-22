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
      <img
        src={props.picture}
        className="instrument-image"
        alt={`Picture showing ${props.instrument}`}
      />
      <Flex vertical justify="space-between" className="post-content">
        <div>
          <Flex align="center" className="post-details">
            <Avatar shape="square" size={52}>
              {props.userName.slice(0, 1)}
            </Avatar>
            <div>
              <div className="post-author">{props.userName}</div>
              <div>
                {`${props.createdTime} • `}
                <strong>{`${props.userLocation}`}</strong>
              </div>
            </div>
          </Flex>
          <p>{props.body}</p>
          <Button
            type="link"
            className="btn-link btn-small"
            onClick={toggleInstrumentDetails}
          >
            Show details
          </Button>
          {showInstrumentDetails && (
            <ul>
              <li>
                <strong>Instrument: </strong>
                {props.instrument}
              </li>
              <li>
                <strong>Brand: </strong>
                {props.brand}
              </li>
              <li>
                <strong>Age: </strong>
                {props.age}
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
      </Flex>
    </div>
  );
}

export default InstrumentCard;

InstrumentCard.propTypes = {
  userName: PropTypes.string,
  createdTime: PropTypes.number,
  userLocation: PropTypes.string,
  picture: PropTypes.string,
  body: PropTypes.string,
  instrument: PropTypes.string,
  brand: PropTypes.string,
  age: PropTypes.number,
};

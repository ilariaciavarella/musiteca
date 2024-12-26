import { useState } from "react";
import { Avatar, Button, Flex, Image } from "antd";
import PropTypes from "prop-types";
import { MusicNotes, ShareFat } from "@phosphor-icons/react";
import "./card.scss";

function InstrumentCard(props) {
  const [showInstrumentDetails, setShowInstrumentDetails] = useState(false);
  const creationDateDate = new Date(props.creationDate);

  function toggleInstrumentDetails() {
    setShowInstrumentDetails((prevState) => !prevState);
  }

  return (
    <div className="card">
      <Flex vertical justify="space-between" className="post-content">
        <div>
          <Flex align="center" className="post-details">
            <Avatar shape="square" size={52}>
              {props.userName.slice(0, 1)}
            </Avatar>
            <div>
              <div className="post-author">{props.userName}</div>
              <div>
                {`${creationDateDate.toLocaleDateString("en-GB")} • `}
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
      <Image
        src={props.picture}
        className="instrument-image"
        preview={{
          movable: false,
          toolbarRender: () => null,
          getContainer: document.querySelector("#root"),
          forceRender: true,
        }}
        alt={`Picture showing ${props.instrument}`}
      />
    </div>
  );
}

export default InstrumentCard;

InstrumentCard.propTypes = {
  userName: PropTypes.string,
  creationDate: PropTypes.string,
  userLocation: PropTypes.string,
  picture: PropTypes.string,
  body: PropTypes.string,
  instrument: PropTypes.string,
  brand: PropTypes.string,
  age: PropTypes.number,
};

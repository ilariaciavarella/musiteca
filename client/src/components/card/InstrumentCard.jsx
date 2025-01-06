import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Avatar, Button, Flex, Image } from "antd";
import { MusicNotes } from "@phosphor-icons/react";
import fallBackImage from "../../assets/images/illustrations/musiteca-fallback_img.jpg";
import "./card.scss";

function InstrumentCard(props) {
  const [showInstrumentDetails, setShowInstrumentDetails] = useState(false);
  const [status, setStatus] = useState(0);
  const dateOfCreation = new Date(props.creationDate);

  useEffect(() => {
    if (props.available) {
      setStatus(0);
    } else if (
      !props.available &&
      props.borrowedBy.email !== localStorage.getItem("currentUserEmail")
    ) {
      setStatus(-1);
    } else if (
      !props.available &&
      props.borrowedBy.email === localStorage.getItem("currentUserEmail")
    ) {
      setStatus(1);
    }
  }, [props.available]);

  function toggleInstrumentDetails() {
    setShowInstrumentDetails((prevState) => !prevState);
  }

  async function handleBorrow(postId) {
    if (status === 0) {
      await axios
        .put(
          `${import.meta.env.VITE_API_URL}/api/posts/${postId}/borrow`,
          null,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          },
        )
        .then((response) => {
          console.log(response.status);
          setStatus(1);
        })
        .catch((error) => console.error(error));
    } else if (status === 1) {
      await axios
        .put(
          `${import.meta.env.VITE_API_URL}/api/posts/${postId}/return`,
          null,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          },
        )
        .then((response) => {
          console.log(response.status);
          setStatus(0);
        })
        .catch((error) => console.error(error));
    }
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
                {`${dateOfCreation.toLocaleDateString("en-GB")} • `}
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
        <div className="borrow-action">
          {props.borrowedBy && (
            <p>
              <strong>Borrowed by: </strong>
              {props.borrowedBy.firstName + " " + props.borrowedBy.lastName}
            </p>
          )}
          {props.userEmail !== localStorage.getItem("currentUserEmail") && (
            <Button
              type="primary"
              className={status === 1 && "borrowed-btn"}
              block
              icon={<MusicNotes size={28} />}
              onClick={() => {
                handleBorrow(props.postId);
              }}
              disabled={status === -1}
            >
              {status === 1 ? "Return" : "Borrow"}
            </Button>
          )}
        </div>
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
        fallback={fallBackImage}
      />
    </div>
  );
}

export default InstrumentCard;

InstrumentCard.propTypes = {
  postId: PropTypes.string,
  userName: PropTypes.string,
  userEmail: PropTypes.string,
  creationDate: PropTypes.string,
  userLocation: PropTypes.string,
  picture: PropTypes.string,
  body: PropTypes.string,
  instrument: PropTypes.string,
  brand: PropTypes.string,
  age: PropTypes.number,
  available: PropTypes.bool,
  borrowedBy: PropTypes.object,
};

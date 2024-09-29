import PropTypes from "prop-types";
import "./button.scss";

function ActionButton(props) {
  return (
    <button onClick={props.action} className={`btn btn-${props.type}`}>
      {props.icon}
      {props.text}
    </button>
  );
}

ActionButton.propTypes = {
  action: PropTypes.func.isRequired,
  icon: PropTypes.element,
  text: PropTypes.string,
  type: PropTypes.string,
};

export default ActionButton;

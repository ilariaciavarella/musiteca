import PropTypes from "prop-types";
import "./button.scss";

function ActionButton(props) {
  return (
    <button
      onClick={props.action}
      className={
        props.block
          ? `btn btn-${props.type} btn-block`
          : `btn btn-${props.type}`
      }
    >
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
  block: PropTypes.bool,
};

export default ActionButton;

import PropTypes from "prop-types";

function ActionButton(props) {
  return (
    <button onClick={props.action}>
      {props.icon}
      {props.text}
    </button>
  );
}

ActionButton.propTypes = {
  action: PropTypes.func.isRequired,
  icon: PropTypes.element,
  text: PropTypes.string,
};

export default ActionButton;

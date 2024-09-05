import PropTypes from "prop-types";

function ActionButton(props) {
  let listOfClasses = "btn";
  switch (props.type) {
    case "primary":
      listOfClasses += " btn-primary";
      break;
    case "secondary":
      listOfClasses += " btn-secondary";
      break;
    case "invisible":
      listOfClasses += " btn-invisible";
      break;
  }

  return (
    <button onClick={props.action} className={listOfClasses}>
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

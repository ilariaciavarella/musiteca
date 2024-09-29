import PropTypes from "prop-types";
import "./button.scss";

function LinkButton(props) {
  return (
    <a href={props.href} target="_blank" className={`btn btn-${props.type}`}>
      {props.icon}
      {props.text}
    </a>
  );
}

LinkButton.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.element,
  text: PropTypes.string,
  type: PropTypes.string,
};

export default LinkButton;

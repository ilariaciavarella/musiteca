import PropTypes from "prop-types";
import "./button.scss";

function LinkButton(props) {
  return (
    <a
      href={props.href}
      target="_blank"
      className={
        props.block
          ? `btn btn-${props.type} btn-block`
          : `btn btn-${props.type}`
      }
    >
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
  block: PropTypes.bool,
};

export default LinkButton;

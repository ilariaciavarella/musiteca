import PropTypes from "prop-types";

function LinkButton(props) {
  return (
    <a href={props.href} target="_blank">
      {props.icon}
      {props.text}
    </a>
  );
}

LinkButton.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.element,
  text: PropTypes.string,
};

export default LinkButton;

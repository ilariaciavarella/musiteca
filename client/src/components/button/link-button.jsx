import PropTypes from "prop-types";
import styles from "./button.module.scss";

function LinkButton(props) {
  let listOfClasses = styles["btn"];
  switch (props.type) {
    case "primary":
      listOfClasses += ` ${styles["btn-primary"]}`;
      break;
    case "secondary":
      listOfClasses += ` ${styles["btn-secondary"]}`;
      break;
    case "invisible":
      listOfClasses += ` ${styles["btn-invisible"]}`;
      break;
  }

  return (
    <a href={props.href} target="_blank" className={listOfClasses}>
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

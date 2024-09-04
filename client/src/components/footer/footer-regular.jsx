import React from "react";
import PropTypes from "prop-types";
import { LinkedinLogo, InstagramLogo, GithubLogo } from "@phosphor-icons/react";

import LinkButton from "../button/link-button.jsx";

import LogoLight from "../../assets/images/logo/musiteca-logo_light.svg";
import LogoDark from "../../assets/images/logo/musiteca-logo_dark.svg";

function FooterRegular(props) {
  return (
    <footer>
      <div>
        <img src={props.light ? LogoLight : LogoDark} alt="Musiteca Logo" />
        <small>
          © 2024 Musiteca by Ilaria Ciavarella – All rights reserved
        </small>
      </div>
      <div>
        <LinkButton
          href="https://www.linkedin.com/in/ilaria-ciavarella"
          icon={<LinkedinLogo />}
        />
        <LinkButton
          href="https://github.com/ilariaciavarella"
          icon={<GithubLogo />}
        />
        <LinkButton
          href="https://www.instagram.com/lil.ciavarella/"
          icon={<InstagramLogo />}
        />
      </div>
    </footer>
  );
}

FooterRegular.propTypes = {
  light: PropTypes.bool,
};

export default FooterRegular;

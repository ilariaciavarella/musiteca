import PropTypes from "prop-types";
import { LinkedinLogo, InstagramLogo, GithubLogo } from "@phosphor-icons/react";
import { Button, Space, Flex } from "antd";

import "./footer.scss";

import LogoLight from "../../assets/images/logo/musiteca-logo_light.svg";
import LogoDark from "../../assets/images/logo/musiteca-logo_dark.svg";

function FooterRegular(props) {
  return (
    <footer
      className={props.light ? "footer-regular footer-light" : "footer-regular"}
    >
      <Flex justify="space-around" align="center" gap="small" wrap>
        <Flex justify="center" align="center" gap="large">
          <img
            src={props.light ? LogoLight : LogoDark}
            alt="Musiteca Logo"
            className="footer-logo"
          />
          <small>
            © 2024 Musiteca by <em>Ilaria Ciavarella</em> – All rights reserved
          </small>
        </Flex>
        <Space size="small" className="social-links">
          <Button
            href="https://www.linkedin.com/in/ilaria-ciavarella"
            icon={<LinkedinLogo size={28} />}
            type="link"
          />
          <Button
            href="https://github.com/ilariaciavarella"
            icon={<GithubLogo size={28} />}
            type="link"
          />
          <Button
            href="https://www.instagram.com/lil.ciavarella/"
            icon={<InstagramLogo size={28} />}
            type="link"
          />
        </Space>
      </Flex>
    </footer>
  );
}

FooterRegular.propTypes = {
  light: PropTypes.bool,
};

export default FooterRegular;

import PropTypes from "prop-types";
import { LinkedinLogo, InstagramLogo, GithubLogo } from "@phosphor-icons/react";
import { Layout, Button, Space, Flex } from "antd";

const { Footer } = Layout;

import "./footer.scss";

function MusitecaFooter(props) {
  return (
    <Footer className={props.light ? "footer footer-light" : "footer"}>
      <Flex justify="space-around" align="center" gap="small" wrap>
        <small>
          © 2024 Musiteca by <em>Ilaria Ciavarella</em> – All rights reserved
        </small>
        <Space size="small" className="social-links">
          <Button
            href="https://www.linkedin.com/in/ilaria-ciavarella"
            icon={<LinkedinLogo size={28} />}
            type="link"
            color={props.light ? "default" : "primary"}
            className="btn-invisible"
          />
          <Button
            href="https://github.com/ilariaciavarella"
            icon={<GithubLogo size={28} />}
            type="link"
            className="btn-invisible"
          />
          <Button
            href="https://www.instagram.com/lil.ciavarella/"
            icon={<InstagramLogo size={28} />}
            type="link"
            className="btn-invisible"
          />
        </Space>
      </Flex>
    </Footer>
  );
}

MusitecaFooter.propTypes = {
  light: PropTypes.bool,
};

export default MusitecaFooter;

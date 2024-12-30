import { Layout, Button, ConfigProvider, Menu } from "antd";
const { Header } = Layout;
import { List, House, PlusCircle } from "@phosphor-icons/react";

import "./header.scss";

import LogoLight from "../../assets/images/logo/musiteca-logo_light.svg";
import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function MusitecaHeader(props) {
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("authToken");
    navigate("/auth/login");
  }

  const menuItems = [
    {
      key: 1,
      label: <a href="/home">Home</a>,
      icon: <House size={20} />,
    },
    {
      key: 2,
      label: "Lend",
      icon: <PlusCircle size={20} />,
      onClick: props.openPostForm,
    },
    {
      key: 3,
      label: "Log out",
      onClick: handleLogout,
    },
  ];

  function toggleNav() {
    setShowNav((prevShowNav) => !prevShowNav);
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#E2EE00",
          colorBgBase: "#4930AA",
        },
        components: {
          Button: {
            primaryColor: "#120C2A",
          },
        },
      }}
    >
      <Header className="musiteca-header">
        <div className="header-top">
          <img src={LogoLight} alt="Musiteca Logo" className="header-logo" />
          <Button
            type="primary"
            icon={<List size={28} />}
            onClick={toggleNav}
            className="header-btn"
          />
        </div>
        <div
          className={showNav ? "header-bottom header-visible" : "header-bottom"}
        >
          <Menu
            items={menuItems}
            selectable={false}
            className="nav-menu"
            mode="inline"
          />
        </div>
      </Header>
    </ConfigProvider>
  );
}

MusitecaHeader.propTypes = {
  openPostForm: PropTypes.func,
};

export default MusitecaHeader;

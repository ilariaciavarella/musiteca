import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Layout, Button, ConfigProvider, Menu } from "antd";
const { Header } = Layout;
import {
  List,
  House,
  Guitar,
  CassetteTape,
  MegaphoneSimple,
} from "@phosphor-icons/react";
import LogoLight from "../../assets/images/logo/musiteca-logo_light.svg";
import "./header.scss";
import axios from "axios";

function MusitecaHeader(props) {
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();

  async function handleLogout() {
    axios
      .post(`${import.meta.env.VITE_API_URL}/auth/logout`, null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((response) => {
        console.log(response.status);
        localStorage.removeItem("authToken");
        navigate("/auth/login");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const menuItems = [
    {
      key: 1,
      label: <a href="/">Home</a>,
      icon: <House size={20} />,
    },
    {
      key: 2,
      label: <a href="/borrowed">Borrowed</a>,
      icon: <CassetteTape size={20} />,
    },
    {
      key: 3,
      label: <a href="/lending">Lending</a>,
      icon: <Guitar size={20} />,
    },
    {
      type: "divider",
    },
    {
      key: 4,
      label: "Lend your instrument",
      icon: <MegaphoneSimple size={20} />,
      onClick: props.openPostForm,
    },
    {
      key: 5,
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
          <a href="/">
            <img src={LogoLight} alt="Musiteca Logo" className="header-logo" />
          </a>
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

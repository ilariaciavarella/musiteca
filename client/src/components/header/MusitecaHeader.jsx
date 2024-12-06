import { Layout, Button, ConfigProvider, Menu, Input, Flex } from "antd";
const { Header } = Layout;
import {
  List,
  House,
  PlusCircle,
  MagnifyingGlass,
} from "@phosphor-icons/react";

import "./header.scss";

import LogoLight from "../../assets/images/logo/musiteca-logo_light.svg";
import { useState } from "react";

function MusitecaHeader(props) {
  const [showNav, setShowNav] = useState(true);

  const menuItems = [
    {
      key: 1,
      label: <a href="/">Home</a>,
      icon: <House size={20} />,
    },
    {
      key: 2,
      label: "Lend",
      icon: <PlusCircle size={20} />,
    },
    {
      key: 3,
      label: <a href="/auth/login">Log out</a>,
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
          <Flex gap="small" className="search-bar-container">
            <Input type="search" placeholder="Guitar" />
            <Button type="primary" icon={<MagnifyingGlass size={28} />} />
          </Flex>
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

export default MusitecaHeader;

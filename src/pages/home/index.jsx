import React, { useState } from "react";
import "./scss/index.scss";
import { useNavigate, Outlet } from "react-router-dom";
import { Layout, Menu, theme } from "antd";
import { UserOutlined, RedditOutlined } from "@ant-design/icons";

export default function Home() {
  const navigate = useNavigate();
  const [defaultKey, setDefaultKey] = useState("/home/userList");

  const { Header, Content, Footer } = Layout;
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const items = [
    {
      label: "用户列表",
      path: "/home/userList",
      icon: <UserOutlined />,
      key: "/home/userList",
    },
    {
      label: "测试页面",
      path: "/home/testPage",
      icon: <RedditOutlined />,
      key: "/home/testPage",
    },
  ];
  const onMenuClick = (item) => {
    navigate(item.key);
    setDefaultKey(item.key);
  };
  return (
    <Layout>
      <Header>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[defaultKey]}
          onClick={onMenuClick}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Content>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          {/* 二级路由出口 */}
          <Outlet />
        </div>
      </Content>
      <Footer>Ant Design ©{new Date().getFullYear()} Created by Ant UED</Footer>
    </Layout>
  );
}

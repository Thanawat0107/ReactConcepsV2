import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";

const { Header, Sider, Content } = Layout;
const Dashboard = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[1]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: (
              <NavLink className="nav-link active" to="/">
                Home
              </NavLink>
              ),
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: (
              <NavLink className="nav-link active" to="/Forms">
                Form
              </NavLink>
              ),
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: (
              <NavLink className="nav-link active" to="/tables">
                Table
              </NavLink>
              ),
            },
            {
              key: "4",
              icon: <UploadOutlined />,
              label: (
              <NavLink className="nav-link active" to="/tables">
                  Todo List
              </NavLink>
              ),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;

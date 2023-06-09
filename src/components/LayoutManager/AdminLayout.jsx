import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { AdminHeader } from "components/Header";
const { Header, Content, Footer, Sider } = Layout;
const Container = styled.div`
  position: relative;
  width: 1728px;
  height: 1117px;
  background: #f3f3f3;
  border-radius: 50px;
`;
const StyledLayout = styled(Layout)`
  position: absolute;
  width: 100%;
  .header {
    background: rgb(255, 255, 255);
    height: fit-content;
  }
`;
export const AdminLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Container>
      <StyledLayout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={[
              UserOutlined,
              VideoCameraOutlined,
              UploadOutlined,
              UserOutlined,
            ].map((icon, index) => ({
              key: String(index + 1),
              icon: React.createElement(icon),
              label: `nav ${index + 1}`,
            }))}
          />
        </Sider>
        <Layout>
          <Header className="header">
            <AdminHeader></AdminHeader>
          </Header>
          <Content
            style={{
              margin: "24px 16px 0",
            }}
          >
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              <Outlet></Outlet>
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </StyledLayout>
    </Container>
  );
};

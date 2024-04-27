import React from "react"
import { Outlet } from "react-router-dom";
import { Layout as LayoutContainer, theme } from "antd"
import { NavBar } from "../components"

const { Header, Content } = LayoutContainer;

const Layout: React.FunctionComponent<Record<string, never>> = () => {
    const { 
        token: { colorBgContainer }, 
    } = theme.useToken();

    return (
        <LayoutContainer>
            <Header style={{ background: colorBgContainer, borderBottom: '1px solid #f1f1f1'}}>
                <NavBar />
            </Header>
            <Content style={{background: colorBgContainer}}>
                <Outlet />
            </Content>
        </LayoutContainer>
    )
}

export default Layout;
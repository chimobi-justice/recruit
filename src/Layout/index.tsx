import { FunctionComponent } from "react"
import { Outlet } from "react-router-dom";
import { Layout as LayoutContainer, theme } from "antd"
import { FooterBox, HeroSection, NavBar } from "../components"

const { Header, Content, Footer } = LayoutContainer;

const Layout: FunctionComponent<Record<string, never>> = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <LayoutContainer>
      <Header className="bg-primary-300 border-b">
        <NavBar />
      </Header>
      <Content style={{ background: colorBgContainer }}>
        <HeroSection />
        <Outlet />
      </Content>
      <Footer className="bg-blue-900 p-5">
        <FooterBox />
      </Footer>
    </LayoutContainer>
  )
}

export default Layout;
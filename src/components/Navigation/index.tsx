import { NavLink, Link } from "react-router-dom"
import { Flex, Space, Typography, Grid } from "antd"
import {
  FolderOpenOutlined,
  HomeOutlined,
} from "@ant-design/icons"

const { Title } = Typography;
const { useBreakpoint } = Grid;

const NavBar = () => {
  
  const { lg } = useBreakpoint();

  const titleFontSize = lg ? '30px' : '22px';
  
  return (
    <Flex align="center" justify="space-between"  >
      <Space direction="horizontal" align="center" size="large">
        <Title level={2} style={{fontSize: titleFontSize}} className="mb-0"><Link to="/" style={{color: 'black'}}>Recruit</Link></Title>
      </Space>

      <Space direction="horizontal" size="large" className="text-black">
        <NavLink to="/" className="text-black"><HomeOutlined /> Home</NavLink>
        <NavLink to="/jobs" className="text-black"><FolderOpenOutlined /> Jobs</NavLink>
      </Space>
    </Flex>
  )
}

export default NavBar;
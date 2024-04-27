import { NavLink } from "react-router-dom"
import { Flex, Space, Typography } from "antd"
import { 
    FolderOpenOutlined,
    HomeOutlined,
    UserAddOutlined 
} from "@ant-design/icons"

const { Title } = Typography;

const NavBar = () => {
    return (
        <Flex align="center" justify="space-between">
            <Space direction="horizontal" align="center" size="large">
                <Title level={2} className="mb-0">Recruit</Title>
            </Space>
            
            <Space direction="horizontal" size="large" className="text-black">
                <NavLink to="/" className="text-black"><HomeOutlined /> Home</NavLink>
                <NavLink to="/jobs" className="text-black"><FolderOpenOutlined /> Jobs</NavLink>
                <NavLink to="/matches" className="text-black"><UserAddOutlined /> Matches</NavLink>
            </Space>
        </Flex>
    )
}

export default NavBar;
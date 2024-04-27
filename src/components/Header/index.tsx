import React from "react"
import { Col, Row, Typography } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import { Input } from "../index" 

const { Title } = Typography;

interface IProps {
    title: string,
}

const Header: React.FunctionComponent<IProps> = ({title}) => {
    return (
        <Row className="my-5">
            <Col span={6}>
                <Title level={2}>{title}</Title>
            </Col>

            <Col span={18}>
                <Input
                    name=""
                    type="search"
                    size="large"
                    prefix={<SearchOutlined />} 
                    placeholder="Search jobs" 
                />
            </Col>
        </Row>
    )
}

export default Header;
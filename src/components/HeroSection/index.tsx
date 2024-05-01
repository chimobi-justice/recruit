import React from "react"
import { Col, Row, Typography } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import { Input } from "../index"

const { Title } = Typography;

const HeroSection: React.FunctionComponent = () => {
  return (
    <section className="py-20 h-full bg-primary-300 mb-20 text-center">
      <Row className="w-11/12 mx-auto">
        <Col span={24}>
          <Title level={1} style={{ marginTop: '0em', marginBottom: '0.2em', color: '#9d9d9d', fontSize: '6em' }}>Boost Your Career</Title>
          <p className="text-sm text-gray-600 font-semibold leading-7">Discover a platform tailored for passionate job seeker interested in startup.</p>
          <p className="text-sm text-gray-600 font-semibold leading-7">Find Your next career oppornuty and connect with like minded individuals.</p>
        </Col>

        <Col span={24} className="mt-5">
            <Input
              name=""
              type="search"
              size="large"
              prefix={<SearchOutlined />}
              placeholder="Search jobs"
            />
        </Col>
      </Row>
    </section>
  )
}

export default HeroSection;
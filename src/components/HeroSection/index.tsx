import React, { useState } from "react"
import { Col, Row, Typography } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import { Input } from "../index"
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../context/SearchContext";

const { Title } = Typography;

const HeroSection: React.FunctionComponent = () => {
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

  const { setSearch: setSearchContext } = useSearch();

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
    setSearchContext(e.target.value)
    
    if (search.trim() !== '') {
      navigate('/search');
    }
  };

  return (
    <section className="py-10 md:py-20 px-3 lg:px-0 bg-primary-300 mb-10 md:mb-20 text-center">
      <Row className="container mx-auto">
        <Col span={24}>
          <Title level={1} style={{ marginTop: '0em', marginBottom: '0.2em', color: '#9d9d9d', fontSize: '5.4vw', fontWeight: 'bold' }}>Boost Your Career</Title>
          <p className="text-sm text-gray-600 font-semibold leading-7">Discover a platform tailored for passionate job seeker interested in startup.</p>
          <p className="text-sm text-gray-600 font-semibold leading-7">Find Your next career oppornuty and connect with like minded individuals.</p>
        </Col>

        <Col span={24} className="mt-5">
            <Input
              name=""
              type="search"
              size="large"
              value={search}
              prefix={<SearchOutlined />}
              placeholder="Search job by title or description..."
              onChange={handleSearch}
            />
        </Col>
      </Row>
    </section>
  )
}

export default HeroSection;
import { Link } from "react-router-dom"
import { Card, Col, Row, Space, Typography, Grid } from "antd"
import { BorderLeftOutlined } from "@ant-design/icons"
import { Avatar } from "../../../../components"
import { categoryData } from "../../../../constant/category"

const { Title } = Typography;

const { useBreakpoint } = Grid;

const Categories = () => {
  const { lg } = useBreakpoint();

  const titleFontSize = lg ? '36px' : '24px';

  return (
    <section className="pb-10 bg-white">
      <div className="w-11/12 mx-auto">
        <div className="my-10">
          <Title level={1} style={{ color: 'rgba(156, 156, 255, 1)', fontSize: titleFontSize }}>Explore by <span className="text-blue-800">category</span></Title>
        </div>

        <Row gutter={[16, 24]}>
          {categoryData.map((category, index) => (
            <Col key={index} xl={6} md={8} sm={12} xs={24}>
              <Link to={`/jobs/category/${category.slug}`}>
                <Card key={index} className="hover:bg-primary-300 hover:transition-all hover:ease-in-out hover:delay-75">
                  <Space direction="horizontal" align="center">
                    <Avatar size="large" shape="square" icon={<BorderLeftOutlined />} />
                    <Title level={5}>{category.name}</Title>
                  </Space>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}

export default Categories;
import { Card, Col, Row, Space, Typography } from "antd"
import { Avatar } from "../../../../components";
import { BorderLeftOutlined } from "@ant-design/icons";

const { Title } = Typography;

const Categories = () => {
  const categoryData = [
    { name: "Software Development" },
    { name: "Design" },
    { name: "Customer Service" },
    { name: "Sales / Business" },
    { name: "Product" },
    { name: "Project Management" },
    { name: "Data Analysis" },
    { name: "DevOps / Sysadmin" },
  ];

  return (
    <section className="pb-10 bg-white">
      <div className="w-11/12 mx-auto">
        <div className="my-10">
          <Title level={1} style={{ color: 'rgba(156, 156, 255, 1)' }}>Explore by <span className="text-blue-800">category</span></Title>
        </div>

        <Row gutter={[16, 24]}>
          {categoryData.map((category, index) => (
            <Col span={6} key={index}>
              <Card key={index}>
                <Space direction="horizontal" align="center">
                  <Avatar size="large" shape="square" icon={<BorderLeftOutlined />} />
                  <Title level={5}>{category.name}</Title>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}

export default Categories;
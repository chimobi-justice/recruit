import { Col, Row } from "antd"

const FooterBox = () => {
  return (
    <div className="w-11/12 mx-auto text-white p-5 items-center">
      <Row gutter={[8, 16]}>
        <Col span={24}>
          <p className="text-gray-300">&copy; {new Date().getFullYear()} All Rights Reserved. Recruit | In association with Remotive.</p>
        </Col>
      </Row>
    </div>
  )
}

export default FooterBox;
import { useState } from "react"
import { Link } from "react-router-dom"
import { Row, Col, Card, Space, Typography, Tag, Divider} from "antd"
import { ArrowRightOutlined } from "@ant-design/icons"
import { formatDate, truncate } from "../../helpers"
import { Avatar, Button, Modal } from "../index"
import { IJob } from "../../types"

const { Title } = Typography;

const JobCard = ({ job }: { job: IJob }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedUrl, setSelectedUrl] = useState<string | null>(null);

  const showModal = (url: string) => {
    setIsModalOpen(true);
    setSelectedUrl(url)
  };

  const handleOk = () => {
    setIsModalOpen(false);
    if (selectedUrl) {
      window.open(selectedUrl, "_blank");
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedUrl(null)
  };

  return (
    <>
      <Col span={24}>
        <Card className="bg-primary-300 hover:bg-primary-100 hover:transition-all hover:ease-in-out hover:delay-75">
          <Row align="middle">
            <Col xl={16} lg={14} md={14} sm={24} xs={24} className="p-5">
              <Space direction="vertical">
                <div>
                  <Space align="center" >
                    <Avatar
                      size="large"
                      shape="circle"
                      src={job?.company_logo || ""}
                    />
                    <Title level={5}>{job?.title}</Title>
                  </Space>
                </div>
                <div>
                  <Space wrap>
                    <Tag>{job?.category}</Tag>
                    {job?.salary ? (
                      <Tag>{truncate(job?.salary, 20)}</Tag>
                    ) : (
                      <Tag>|-</Tag>
                    )}
                    <Tag>{truncate(job?.candidate_required_location, 30)}</Tag>
                  </Space>
                </div>
              </Space>
            </Col>

            <Col xl={8} lg={10} md={10} sm={24} xs={24}  className="p-5">
              <Space wrap align="center" size="large">
                <div>
                  <p>{formatDate(job?.publication_date)}</p>
                </div>
                <div>
                  <Button
                    type="primary"
                    htmlType="button"
                    target="_blank"
                    onClick={() => showModal(job?.url)}
                  >
                    Apply
                  </Button>
                </div>
                <div>
                  <Link to={`/jobs/${job?.id}/overview`}>
                    <Button
                      type="default"
                      htmlType="button"
                    >
                      See More <ArrowRightOutlined />
                    </Button>
                  </Link>
                </div>
              </Space>
            </Col>
          </Row>
        </Card>
      </Col>
      <Divider />

      <Modal
        title="Warning"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        Note by clicking ok will redirect you to <Link to="https://remotive.com/" target="_blank" className="text-blue-300 underline">Remotive.com</Link>
      </Modal>
    </>
  )
}

export default JobCard;
import { useState } from "react"
import { Link } from "react-router-dom"
import { Row, Col, Card, Flex, Space, Typography, Tag, Divider } from "antd"
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
        <Card className="bg-primary-300">
          <Row align="middle">
            <Col span={16} className="p-5">
              <Flex align="center" gap={4}>
                <div>
                  {job?.company_logo != null && (
                    <Avatar size="large" shape="circle" src={job?.company_logo} />
                  )}

                  {job?.company_logo === null && (
                    <Avatar size="large" shape="circle" />
                  )}
                </div>

                <div>
                  <div>
                    <Space align="center">
                      <Title level={4}>{job?.title}</Title>
                      <Title level={5}>&bull; {job?.company_name}</Title>
                    </Space>
                  </div>
                  <div>
                    <Space>
                      <Tag>{job?.category}</Tag>
                      {job?.salary ? (
                        <Tag>{truncate(job?.salary, 60)}</Tag>
                      ) : '|-'}
                      <Tag>{job?.candidate_required_location}</Tag>
                    </Space>
                  </div>
                </div>
              </Flex>
            </Col>

            <Col span={8} className="p-5">
              <Space>
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
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Card, Col, Divider, Flex, Grid, Row, Space, Tag, Typography } from "antd"
import { ArrowRightOutlined } from "@ant-design/icons"
import { Avatar, Button, Modal, NotFound, Skeleton } from "../../../components"
import { formatDate, truncate } from "../../../helpers"
import { IJob } from "../../../types"
import useJobs from "../../../hooks/useJobs"

const { Title } = Typography;
const { useBreakpoint } = Grid;

const SingleJobDetails: React.FunctionComponent = () => {
  const [jobDetails, setJobDetails] = useState<IJob | null>(null);
  const [notFound, setNotFound] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedUrl, setSelectedUrl] = useState<string | null>(null);

  const { jobs, isLoading, isSuccess, isError } = useJobs('job-details');

  const { id } = useParams();
  
  const { lg } = useBreakpoint();

  const titleFontSize = lg ? '28px' : '22px';

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

  useEffect(() => {
    if (id !== undefined && jobs && jobs?.length > 0) {
      const filterJob = jobs?.find((job: IJob) => job.id === parseInt(id, 10));
      filterJob ? setJobDetails(filterJob) : setNotFound(true);
    }
  }, [id, jobs]);

  const createMarkup = () => {
    return {
      __html: jobDetails?.description || ''
    }
  }

  return (
    <section className="w-11/12 mx-auto">
      {isLoading && <Skeleton />}

      {notFound && <NotFound />}

      {isError && <p>sorry you can try again.</p>}

      {jobDetails && isSuccess && (
        <Row gutter={16}>
          <Col xl={16} lg={24} md={24} sm={24} xs={24} className="pb-10">
            <div className="my-5">
              <Link to="/jobs" className="text-black underline hover:text-gray-500 hover:underline">BACK TO ALL JOBS</Link>
            </div>
            <div className="my-5">
              <Title level={3} style={{fontSize: titleFontSize}}>[Hiring] {jobDetails?.title} @{jobDetails?.company_name}</Title>
              <p className="text-sm">
                {formatDate(jobDetails?.publication_date)} - {jobDetails?.company_name} is hiring a remote {jobDetails?.title} {jobDetails?.salary ? ` 💸Salary: ${jobDetails?.salary}` : ''} 📍Location: {jobDetails?.candidate_required_location}
              </p>
              <Divider />
            </div>

            <div dangerouslySetInnerHTML={createMarkup()} className="p-3 my-4" />
          </Col>

          <Col xl={8} lg={12} md={14} sm={24} xs={24} className="bg-primary-300 h-auto lg:h-screen flex sticky top-0 p-5 items-center justify-center content-center">
            <div className="w-full">
              <div className="text-center my-5">
                <Avatar size={64} shape="circle" src={jobDetails?.company_logo} />
                <Title level={4}>{jobDetails?.title}</Title>
              </div>

              <div className="my-10">
                <Card>
                  <div className="mt-2 mb-5">
                    <Tag color="processing">{jobDetails?.category}</Tag>
                  </div>
                  <Flex gap={8}>
                    <div className="w-6/12 lg:w-4/12">
                      <p className="text-xs font-bold mb-1">💸SALARY</p>
                      {jobDetails?.salary && (
                        <p className="text-sm font-base bg-primary-300 p-1 rounded">{truncate(jobDetails?.salary, 10)}</p>
                      )}
                    </div>
                    <div className="w-full">
                      <p className="text-xs font-bold mb-1">REMOTE LOCATION</p>
                      <Space wrap>
                        {jobDetails?.candidate_required_location?.split(',').map((location, index) => (
                          <Tag key={index} color="processing">📍{location.trim()}</Tag>
                        ))}
                      </Space>
                    </div>
                  </Flex>

                  <Divider />

                  <Flex justify="space-between">
                    <div>
                      <p className="text-xs font-bold">JOB TYPE</p>
                      <p className="text-sm font-base">{jobDetails?.job_type}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold">POSTED</p>
                      <p className="text-sm font-base">{formatDate(jobDetails?.publication_date)}</p>
                    </div>
                  </Flex>
                </Card>

                <Row justify="center">
                  <Col span={24} className="text-center p-5">
                    <Button
                      type="primary"
                      htmlType="button"
                      size="large"
                      onClick={() => showModal(jobDetails?.url)}
                    >
                      Apply for this Position <ArrowRightOutlined />
                    </Button>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      )}

      <Modal
        title="Warning"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        Note by clicking ok will redirect you to <Link to="https://remotive.com/" target="_blank" className="text-blue-300 underline">Remotive.com</Link>
      </Modal>
    </section>
  )
}

export default SingleJobDetails;
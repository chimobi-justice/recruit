import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { Card, Col, Divider, Flex, Row, Tag, Typography } from "antd"
import { ArrowRightOutlined } from "@ant-design/icons"
import { Avatar, Button, Modal, NotFound, Skeleton } from "../../../components"
import { BaseUrl, fetchData } from "../../../utils"
import { formatDate, truncate} from "../../../helpers"
import { IJob } from "../../../types"

const { Title } = Typography;

const JobDetails: React.FunctionComponent = () => {
    const [jobDetails, setJobDetails] = useState<IJob | null>(null);
    const [notFound, setNotFound] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedUrl, setSelectedUrl] = useState<string | null>(null);
    const {id} = useParams();
    
    const fetchJobsDetails = async () => {
        const res = await fetchData(BaseUrl);
        const dataResponse = await res.data;
        return dataResponse;
    };

    const { data: jobData, isLoading } = useQuery({
        queryKey: ['job-details'],
        queryFn: fetchJobsDetails
    })

    useEffect(() => {
        if (id !== undefined && jobData && jobData.jobs) {
            const filterJob = jobData.jobs.find((job: IJob) => job.id === parseInt(id));
            filterJob ? setJobDetails(filterJob) : setNotFound(true);
        }

    }, [id, jobData]);

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
        <section className="w-11/12 mx-auto">
            {isLoading && <Skeleton />}
          
            {notFound && <NotFound />}
            
            {jobDetails && (
                <Row gutter={16}>
                    <Col span={18}>
                        <div className="my-5">
                            <Link to="/jobs" className="text-black underline hover:text-gray-500 hover:underline">BACK TO ALL JOBS</Link>
                        </div>
                        <div className="my-5">
                            <Title level={3}>[Hiring] {jobDetails?.title} @{jobDetails?.company_name}</Title>
                            <p className="text-sm">
                                {formatDate(jobDetails?.publication_date)} - {jobDetails?.company_name} is hiring a remote {jobDetails?.title} {jobDetails?.salary ? ` 💸Salary: ${jobDetails?.salary}` : ''} 📍Location: {jobDetails?.candidate_required_location}
                            </p>
                            <Divider />
                        </div>

                        <div dangerouslySetInnerHTML={{__html: jobDetails?.description || ''}}  className="p-3 my-4"/>
                    </Col>

                    <Col span={6} className="bg-primary-100 h-screen flex sticky top-0 p-5 items-center justify-center content-center">
                        <div>
                            <div className="text-center my-5">
                                <Avatar size={64} shape="circle" src={jobDetails?.company_logo } />
                                <Title level={4}>{jobDetails?.title}</Title>
                            </div>

                            <div className="my-10">
                                <Card>
                                    <div className="mt-2 mb-5">
                                        <Tag color="processing">{jobDetails?.category}</Tag>
                                    </div>
                                    <Flex justify="space-between" gap={8}>
                                        <div>
                                            <p className="text-xs font-bold mb-1">💸SALARY</p>
                                            <p className="text-sm font-base bg-red-400 p-1 rounded">{truncate(jobDetails?.salary ? `${jobDetails?.salary}` : '', 10)}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold mb-1">REMOTE LOCATION</p>
                                            <p className="text-sm font-base bg-red-300 p-1 rounded">📍{truncate(jobDetails?.candidate_required_location, 15)}</p>
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
                message="Note by clicking ok will redirect you to Remotive.com"
            />
        </section>
    )
}

export default JobDetails;
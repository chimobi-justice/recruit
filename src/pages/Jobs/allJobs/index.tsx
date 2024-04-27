import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useInfiniteQuery } from "@tanstack/react-query"
import { Card, Col, Divider, Flex, Row, Space, Tag, Typography } from "antd"
import { ArrowRightOutlined } from "@ant-design/icons"
import { Avatar, Button, Modal, Skeleton } from "../../../components"
import {truncate, formatDate} from "../../../helpers"
import {fetchData, BaseUrl} from "../../../utils"
import { IJob } from "../../../types"

const { Title } = Typography;

const AllJobs: React.FunctionComponent = () => {
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

    const fetchAllJobs = async ({ pageParam = 0 }) => {
        const res = await fetchData(`${BaseUrl}?limit=15&offset=${pageParam}`);
        const dataResponse = await res.data;
        return {...dataResponse, prevOffset: pageParam};
    };

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading
    } = useInfiniteQuery({
            queryKey: ['all-jobs'],
            queryFn: fetchAllJobs,
            initialPageParam: 0,
            getNextPageParam: (lastPage) => {
                if (lastPage.prevOffset + 15 > lastPage.jobs) {
                    return false;
                }
                return lastPage.prevOffset + 15
            },
    })    

    return (
        <>
            {isLoading && <Skeleton />}

            <Row gutter={8}>
                {data && data?.pages?.map((page, pageIndex) => (
                    <React.Fragment key={pageIndex}>
                        {page?.jobs?.map((job: IJob) => (
                            <>
                                <Col span={24}>
                                    <Card className="bg-primary-100">
                                        <Row align="middle">
                                            <Col span={16} className="p-5">
                                                <Flex align="center" gap={4}>
                                                    <div>
                                                        {job?.company_logo != null && (
                                                            <Avatar size="large" shape="circle" src={job?.company_logo}/>
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
                                                            onClick={() => showModal(job.url)}
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
                            </>
                        ))}
                    </React.Fragment>
                ))}

                <Row className="w-full">
                    <Col span={24} className="p-5 text-center">
                        {hasNextPage && (
                            <Button
                                type="primary"
                                htmlType="button"
                                onClick={() => fetchNextPage()}
                                disabled={isFetchingNextPage}
                            >
                                {isFetchingNextPage
                                    ? 'Loading more...'
                                    : hasNextPage
                                    ? 'Load More'
                                    : 'Nothing more to load'}
                            </Button>
                        )}
                    </Col>
                </Row>
            </Row>

            <Modal 
                title="Warning"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                message="Note by clicking ok will redirect you to Remotive.com"
            />
        </>
    );
}

export default AllJobs;
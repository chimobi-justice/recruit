import React from "react"
import { useInfiniteQuery } from "@tanstack/react-query"
import { Col, Row } from "antd"
import { Button, JobCard, Skeleton } from "../../../components"
import { fetchData, BaseUrl } from "../../../utils"
import { IJob } from "../../../types"

const AllJobs: React.FunctionComponent = () => {
  const fetchAllJobs = async ({ pageParam = 0 }) => {
    const res = await fetchData(`${BaseUrl}?limit=15&offset=${pageParam}`);
    const dataResponse = await res.data;
    return { ...dataResponse, prevOffset: pageParam };
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError
  } = useInfiniteQuery({
    queryKey: ['all-jobs'],
    queryFn: fetchAllJobs,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.prevOffset + 15 > lastPage.jobs) {
        return false;
      }
      return lastPage.prevOffset + 15
    }
  })

  return (
    <>
      {isLoading && <Skeleton />}

      {isError && <div>Error: something went wrong</div>}

      <Row gutter={8}>
        {data && data?.pages?.map((page, pageIndex) => (
          <React.Fragment key={pageIndex}>
            {page?.jobs?.map((job: IJob) => (
              <JobCard job={job} key={job?.id}/>
            ))}
          </React.Fragment>
        ))}

        <Row className="w-full my-5">
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
    </>
  );
}

export default AllJobs;
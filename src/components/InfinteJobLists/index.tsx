import { Fragment, FunctionComponent, useEffect, useState } from "react"
import { Col, Row } from "antd"
import { IJob, JobCardInfinteProps } from "../../types"
import { JobCard } from "../index"
import { useSearch } from "../../context/SearchContext"
import { Button } from "../index"

const InfiniteJobList: FunctionComponent<JobCardInfinteProps> = ({
  jobs,
  isSuccess,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage
}) => {
  const { search } = useSearch();

  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    if (jobs && isSuccess) {
      const searchJobs = jobs?.reduce((acc: string[], page: any) => {
        return acc.concat(page.jobs.map((job: IJob) => job.title || job.description))
      }, []);

      setSearchTerm(searchJobs.join(" "))
    }
  }, [jobs, isSuccess]);

  return (
    <>
      <Row gutter={8}>
        {jobs && isSuccess && jobs?.map((page: any, pageIndex: any) => (
          <Fragment key={pageIndex}>
            {page?.jobs?.map((job: IJob) => (
              <JobCard job={job} key={job?.id} />
            ))}
          </Fragment>
        ))}

        {jobs && isSuccess && (
          <Row className="w-full my-5">
            <Col span={24} className="p-5 text-center">
              {hasNextPage && searchTerm.includes(search) &&  (
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
        )}
      </Row>
    </>
  )
}

export default InfiniteJobList;
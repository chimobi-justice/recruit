import React from "react"
import { useInfiniteQuery } from "@tanstack/react-query"
import { Col, Row } from "antd"
import { BaseUrl, fetchData } from "../../utils"
import { Button, JobCard, NotFound, Skeleton } from "../../components"
import { IJob } from "../../types"
import { useSearch } from "../../context/SearchContext"

const Search = () => {
  const { search } = useSearch();

  const searchAllJobs = async ({ pageParam = 0 }) => {
    const res = await fetchData(`${BaseUrl}?limit=15&offset=${pageParam}&search=${search}`);
    const dataResponse = await res.data;
    return { ...dataResponse, prevOffset: pageParam };
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading
  } = useInfiniteQuery({
    queryKey: ['search-jobs', search],
    queryFn: searchAllJobs,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.prevOffset + 15 > lastPage.jobs) {
        return false;
      }
      return lastPage.prevOffset + 15
    }
  })
  
  return (
    <div>
      <div className="w-11/12 mx-auto pb-10">
        {isLoading && <Skeleton />}

        {!search && <NotFound />}

        {search && data && data?.pages.map((page, pageIndex) => (
          <React.Fragment key={pageIndex}>
            {page.jobs.filter((job: any) =>
              job.title.toLowerCase().includes(search.toLowerCase()) ||
              job.description.toLowerCase().includes(search.toLowerCase())
            ).map((job: IJob) => (
              <Row key={job.id}>
                <JobCard job={job} />
              </Row>
            ))}
          </React.Fragment>
        ))}

        {search && data && hasNextPage && (

          <Row className="w-full my-5">
            <Col span={24} className="p-5 text-center">
              {hasNextPage && (
                <Button
                  type="primary"
                  htmlType="button"
                  onClick={() => fetchNextPage()}
                  disabled={isFetchingNextPage}
                >
                  {isFetchingNextPage ? "Loading..." : "Load More"}
                </Button>
              )}
            </Col>
          </Row>
        )}
      </div>
    </div>
  );
};

export default Search;

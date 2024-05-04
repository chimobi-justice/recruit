import { FunctionComponent } from "react"
import { InfiniteJobList, Skeleton } from "../../../components"
import { useInfiniteJobs } from "../../../hooks"

const AllJobs: FunctionComponent = () => {
  const {
    jobs,
    isLoading,
    isSuccess,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useInfiniteJobs('all-job', 15)

  return (
    <section className="w-11/12 mx-auto pb-10">
      {isLoading && <Skeleton />}

      <InfiniteJobList
        jobs={jobs || []}
        isSuccess={isSuccess}
        isFetchingNextPage={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
      />
    </section>
  );
}

export default AllJobs;
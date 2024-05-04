import { useParams } from "react-router-dom"
import { Skeleton } from "../../../../components"
import { useInfiniteJobs } from "../../../../hooks"
import InfiniteJobList from "../../../../components/InfinteJobLists"

const JobCategories = () => {
  const { category } = useParams();

  const {
    jobs,
    isLoading,
    isSuccess,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useInfiniteJobs('job-categories', 15, category)

  return (
    <section className="w-11/12 mx-auto">

      {isLoading && <Skeleton />}

      <InfiniteJobList 
        jobs={jobs || []}
        isSuccess={isSuccess}
        isFetchingNextPage={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
      />
    </section>
  )
}

export default JobCategories;
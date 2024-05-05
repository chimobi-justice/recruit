
import { useInfiniteQuery } from "@tanstack/react-query"
import { BaseUrl, fetchData } from "../../utils"
import { InfiniteJobList, NotFound, Skeleton } from "../../components"
import { useSearch } from "../../context/SearchContext"

const Search = () => {
  const { search } = useSearch();

  const searchAllJobs = async ({ pageParam = 0 }) => {
    const res = await fetchData(`${BaseUrl}?limit=15&offset=${pageParam}&search=${search}`);
    const dataResponse = await res.data;
    return { ...dataResponse, prevOffset: pageParam };
  };

  const {
    data: jobs,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isSuccess
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

        {!search && !jobs?.pages  && (
          <NotFound />
        )}

        {search && jobs?.pages && (
          <InfiniteJobList
            jobs={jobs?.pages || []}
            isSuccess={isSuccess}
            isFetchingNextPage={isFetchingNextPage}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
          />
        )}

      </div>
    </div>
  );
};

export default Search;

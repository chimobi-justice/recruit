import { useInfiniteQuery } from "@tanstack/react-query"
import { BaseUrl, fetchData } from "../utils"

const useInfiniteJobs = (queryKey: string, limit: number = 0, category?: any) => {
    const fetchAllJobs = async ({ pageParam = 0 }) => {
        const res = await fetchData(`${BaseUrl}?limit=${limit}&offset=${pageParam}&category=${category}`);
        const dataResponse = await res.data;
        return { ...dataResponse, prevOffset: pageParam };
    };

    const {
        data: jobResponse,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        isSuccess
    } = useInfiniteQuery({
        queryKey: [queryKey, limit],
        queryFn: fetchAllJobs,
        initialPageParam: 0,
        getNextPageParam: (lastPage) => {
            if (lastPage.prevOffset + 15 > lastPage.jobs) {
                return false;
            }
            return lastPage.prevOffset + 15
        }
    })

    const jobs = jobResponse?.pages ?? null;

    return { jobs, isLoading, isSuccess, fetchNextPage, hasNextPage, isFetchingNextPage }
}

export default useInfiniteJobs;
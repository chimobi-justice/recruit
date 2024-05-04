import { useQuery } from "@tanstack/react-query"
import { BaseUrl, fetchData } from "../utils"
import { IJob } from "../types"

const useJobs = (queryKey: string, limit: number = 0) => { 
    const {data: jobResponse, isLoading, isError, isSuccess} = useQuery({
        queryKey: [queryKey, limit],
        queryFn: () => fetchData(`${BaseUrl}?limit=${limit}`)
    })

    const jobs: IJob[] = jobResponse?.data?.jobs ?? null;

    return { jobs, isLoading, isError, isSuccess}
}

export default useJobs;
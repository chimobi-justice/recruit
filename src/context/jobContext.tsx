import { createContext, ReactNode, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { BaseUrl, fetchData } from "../utils";
import { IJob, JobContextValue } from "../types";

export const JobContext = createContext<JobContextValue>({
  jobs: null,
  isLoading: true,
  isError: false,
  setLimit: () => {}
});

const JobContextProvider = ({ children }: { children: ReactNode }) => {
  const [limit, setLimit] = useState<number>(0);

  const { data: jobResponse, isLoading, isError } = useQuery({
    queryKey: ['jobs', limit],
    queryFn: () => fetchData(`${BaseUrl}?limit=${limit}`)
  });

  const jobs: IJob[] = jobResponse?.data?.jobs ?? null;

  const updateLimit = (newLimit: number) => {
    setLimit(newLimit);
  };

  return (
    <JobContext.Provider value={{ jobs, isLoading, isError, setLimit: updateLimit }}>
      {children}
    </JobContext.Provider>
  );
};

export default JobContextProvider;

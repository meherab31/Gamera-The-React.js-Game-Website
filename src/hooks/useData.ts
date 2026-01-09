import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    //fetch data from api
    setLoading(true); //set loading to true when starting fetch
    apiClient
      .get<FetchResponse<T>>(endpoint, {
        signal: controller.signal,
        ...requestConfig,
      }) //abort fetch if component unmounts
      .then((res) => {
        setData(res.data.results);
        setLoading(false); //set loading to false when fetch is complete
      })
      .catch((error) => {
        if (error instanceof CanceledError) return; //if fetch was cancelled, do nothing
        setError(error.message);
        console.error(error);
        setLoading(false); //set loading to false if there was an error
      });
    return () => controller.abort();
  }, [...(deps || [])]); //[] means this useEffect runs only once when component mounts

  return { data, error, isLoading };
};

export default useData;

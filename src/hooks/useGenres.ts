import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Genre {
  id: number;
  name: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    //fetch genres from api
    setLoading(true); //set loading to true when starting fetch
    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controller.signal }) //abort fetch if component unmounts
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false); //set loading to false when fetch is complete
      })
      .catch((error) => {
        if (error instanceof CanceledError) return; //if fetch was cancelled, do nothing
        setError(error.message);
        console.error(error);
        setLoading(false); //set loading to false if there was an error
      });
    return () => controller.abort();
  }, []); //[] means this effect runs once on mount

  return { genres, error, isLoading };
};

export default useGenres;

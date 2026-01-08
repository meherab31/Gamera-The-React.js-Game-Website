import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

//export game interface to be used in other files
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    //fetch games from api
    setLoading(true); //set loading to true when starting fetch
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal }) //abort fetch if component unmounts
      .then((res) => {
        setGames(res.data.results);
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

  return { games, error, isLoading };
};

export default useGames;

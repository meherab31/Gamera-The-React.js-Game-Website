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
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    //fetch games from api
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal }) //abort fetch if component unmounts
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return; //if fetch was cancelled, do nothing
        setError(error.message);
        console.error(error);
      });
    return () => controller.abort();
  }, []); //[] means this effect runs once on mount

  return { games, error };
};

export default useGames;

import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

export const GameGrid = () => {
  // Use the useGames hook to fetch and display games
  const { games, error } = useGames();

  return (
    <>
      {error && <div>Error: {error}</div>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        padding={"10px"}
        spacing={10}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

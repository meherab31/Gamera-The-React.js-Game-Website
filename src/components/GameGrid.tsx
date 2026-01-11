import { SimpleGrid } from "@chakra-ui/react";
import useGames, { Game, Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardShimmering from "./GameCardShimmering";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";

interface GameGridProps {
  gameQuery: GameQuery;
  // selectedGenre: Genre | null;
  // selectedPlatform: Platform | null;
}

export const GameGrid = ({ gameQuery }: GameGridProps) => {
  // Use the useGames hook to fetch and display games
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {error && <div>Error: {error}</div>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        padding={"10px"}
        spacing={5}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardShimmering />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

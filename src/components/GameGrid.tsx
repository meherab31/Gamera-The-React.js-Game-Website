import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardShimmering from "./GameCardShimmering";
import GameCardContainer from "./GameCardContainer";

export const GameGrid = () => {
  // Use the useGames hook to fetch and display games
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <div>Error: {error}</div>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        padding={"10px"}
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardShimmering key={skeleton} />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

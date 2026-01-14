import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  //generate heading based on gameQuery
  const heading = `${gameQuery.genre?.name || ""} ${
    gameQuery.platform?.name || ""
  } ${gameQuery.sortOrder ? `Games sorted by ${gameQuery.sortOrder}` : ""} ${
    gameQuery.searchText ? `for "${gameQuery.searchText}"` : ""
  }`.trim();

  return (
    <Heading paddingX={5} as={"h2"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;

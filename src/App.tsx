import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { GameGrid } from "./components/GameGrid";
import { useEffect, useState } from "react";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

// Defining GameQuery Interface for selected genre and platform
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

const App = () => {
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // ); intial state variables before using GameQuery

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      {/* Defining Template <Grid templateAreas={`"nav nav" "aside main"`}> */}
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          md: `"nav nav" "aside main"`,
        }}
        templateColumns={{ base: "1fr", lg: "200px 1fr" }}
      >
        <GridItem paddingBottom={2} area={"nav"}>
          <NavBar></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem paddingLeft={"5"} area={"aside"}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <PlatformSelector
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
            selectedPlatform={gameQuery.platform}
          />
          {/* Importing Game List Component */}
          <GameGrid
            gameQuery={gameQuery}
          ></GameGrid>
        </GridItem>
      </Grid>

      {/* <UnderConstruction></UnderConstruction> */}
    </>
  );
};

export default App;

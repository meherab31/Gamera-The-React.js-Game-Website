import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import UnderConstruction from "./components/UnderConstruction";
import { GameGrid } from "./components/GameGrid";
import { useEffect } from "react";
import GenreList from "./components/GenreList";

const App = () => {
  useEffect(() => {
    document.title = "Gamera";
  }, []);

  return (
    <>
      {/* Defining Template <Grid templateAreas={`"nav nav" "aside main"`}> */}
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          md: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area={"nav"}>
          <NavBar></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem paddingLeft={"8"} area={"aside"}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          {/* Importing Game List Component */}
          <GameGrid></GameGrid>
        </GridItem>
      </Grid>

      {/* <UnderConstruction></UnderConstruction> */}
    </>
  );
};

export default App;

import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import UnderConstruction from "./components/UnderConstruction";

const App = () => {
  return (
    <>
      {/* Defining Template <Grid templateAreas={`"nav nav" "aside main"`}> */}
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          md: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area={"nav"} bg={"black"}>
          <NavBar></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} bg={"gold"}>
            Aside
          </GridItem>
        </Show>
        <GridItem area={"main"} bg={"dodgerblue"}>
          Main
        </GridItem>
      </Grid>

      <UnderConstruction></UnderConstruction>
    </>
  );
};

export default App;

import useGames from "../hooks/useGames";

export const GameGrid = () => {
  // Use the useGames hook to fetch and display games
  const { games, error } = useGames();

  return (
    <>
      {error && <div>Error: {error}</div>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

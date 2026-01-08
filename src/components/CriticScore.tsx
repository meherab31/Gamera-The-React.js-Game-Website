import { Badge } from "@chakra-ui/react";

interface CriticScoreProps {
  score: number;
}
const CriticScore = ({ score }: CriticScoreProps) => {
  let colorScheme = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <>
      <Badge
        fontSize={"14px"}
        paddingX={2}
        colorScheme={colorScheme}
        borderRadius={"5px"}
      >
        {score}
      </Badge>
    </>
  );
};

export default CriticScore;

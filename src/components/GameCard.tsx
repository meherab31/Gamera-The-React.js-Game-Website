import {
  Card,
  Image,
  CardBody,
  Heading,
  Text,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import RatingEmoji from "./RatingEmoji";
import getCroppedImageUrl from "../services/image-url";

export interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  const bgColor = useColorModeValue("gray.900", "gray.700");

  return (
    <Card
      bg={bgColor}
      textColor={bgColor === "gray.900" ? "white" : "whiteAlpha.900"}
      borderRadius={10}
      overflow="hidden"
    >
      <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={2} spacing={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"} noOfLines={2} minH="60px">
          {game.name} <RatingEmoji score={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;

import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface GenreListProps {
  onSelectGenre?: (genre: Genre) => void;
  selectedGenre?: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: GenreListProps) => {
  const { data, isLoading, error } = useGenres();
  if (isLoading) return <GenreListSkeleton />;
  if (error) return null;

  return (
    <>
      <Heading alignContent={"left"} paddingY={3} fontSize={"2xl"}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
                boxSize="40px"
                borderRadius="8px"
                objectFit="cover"
                paddingY={1}
              />
              <Button
                fontSize={"md"}
                variant={"link"}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                textAlign={"left"}
                whiteSpace={"normal"}
                onClick={() => onSelectGenre?.(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;

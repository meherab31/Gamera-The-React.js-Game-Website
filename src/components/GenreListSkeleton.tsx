import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <List>
      {skeletons.map((skeleton) => (
        <ListItem key={skeleton} paddingY={1}>
          <HStack>
            <Skeleton boxSize="40px" borderRadius="8px" />
            <SkeletonText width="100px" noOfLines={1} />
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreListSkeleton;

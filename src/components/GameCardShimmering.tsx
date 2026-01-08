import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardShimmering = () => {
  return (
    <Card>
      <Skeleton height={"200px"} />
      <CardBody>
        <SkeletonText mt="4" noOfLines={2} spacing="4" />
      </CardBody>
    </Card>
  );
};

export default GameCardShimmering;

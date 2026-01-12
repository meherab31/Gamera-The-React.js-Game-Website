import React from "react";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface SortSelectorProps {
  onSelectSortOrder?: (sortOrder: string) => void;
  selectedSortOrder?: string;
}

const sortOrders = [
  { value: "", label: "Relevance" },
  { value: "-added", label: "Date added" },
  { value: "name", label: "Name" },
  { value: "-released", label: "Release date" },
  { value: "-metacritic", label: "Popularity" },
  { value: "-rating", label: "Average rating" },
];

const SortSelector = ({
  onSelectSortOrder,
  selectedSortOrder,
}: SortSelectorProps) => {
  return (
    <Menu>
      <MenuButton marginLeft={2} as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relevence
      </MenuButton>
      <MenuList>
        <MenuItem>ABC</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;

import React from "react";
import { IoIosSearch } from "react-icons/io";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

const SearchForm = ({ value, change }) => {
  return (
    <form>
      <InputGroup className="shadow rounded-2">
        <InputLeftElement pointerEvents="none">
          <IoIosSearch color="gray" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Search for a country..."
          className="border-0"
          value={value}
          onChange={change}
        />
      </InputGroup>
    </form>
  );
};

export default SearchForm;

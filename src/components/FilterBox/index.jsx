import React from "react";
import { FormControl, Select } from "@chakra-ui/react";

const FilterBox = ({ select, regionChange }) => {
  return (
    <FormControl>
      <Select
        placeholder="Filter by region"
        select={select}
        onChange={regionChange}
      >
        <option>Africa</option>
        <option>America</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </Select>
    </FormControl>
  );
};

export default FilterBox;

import React, { useState } from "react";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

import Layout from "./components/Layout";

import CountriesList from "./components/CountriesList";
import Forms from "./components/Forms";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

function App() {
  const [searchKey, setSearchKey] = useState("");

  const [selectedRegion, setSelectedRegion] = useState("");

  const handleChange = (e) => {
    setSearchKey(e.target.value);
  };
  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  return (
    <BrowserRouter>
      <ChakraProvider>
        <Layout>
          <Forms
            change={handleChange}
            regionChange={handleRegionChange}
            search={searchKey}
            select={selectedRegion}
          />
          <CountriesList search={searchKey} select={selectedRegion} />
        </Layout>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;

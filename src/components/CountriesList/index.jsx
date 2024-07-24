import React, { useState, useEffect } from "react";
import SingleCountry from "../SingleCountry";

function CountriesList({ search, select }) {
  const [countries, setCountries] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setDisplayData(data);
        console.log(data);
      });
  }, []);

  useEffect(() => {
    // Filter countries based on search term and selected region
    const filtered = countries.filter((country) => {
      const matchesSearch = country.name.common
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesRegion = select ? country.region === select : true;
      return matchesSearch && matchesRegion;
    });
    setDisplayData(filtered);
  }, [search, select, countries]);

  return (
    <div className="container mb-3">
      <div className="row gap-3 justify-content-center align-items-center">
        {displayData?.map((country) => (
          <SingleCountry country={country} key={country.cca3} />
        ))}
      </div>
    </div>
  );
}

export default CountriesList;

import React from "react";

import Card from "react-bootstrap/Card";

const SingleCountry = ({ country }) => {
  return (
    <Card className="col-lg-3 col-md-4 col-8 mb-2 p-0 border-0">
      <Card.Img
        variant="top"
        src={country.flags.svg}
        className="object-fit-cover img-height"
      />
      <Card.Body className="background-switcher text-switcher">
        <Card.Title className="fw-bolder ">{country.name.common}</Card.Title>
        <Card.Text className="mt-4">
          <p className="fw-bold">
            Population: <span className="fw-normal">{country.population}</span>
          </p>
          <p className="fw-bold">
            Region: <span className="fw-normal">{country.region}</span>
          </p>
          <p className="fw-bold">
            Capital: <span className="fw-normal">{country.capital}</span>
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SingleCountry;

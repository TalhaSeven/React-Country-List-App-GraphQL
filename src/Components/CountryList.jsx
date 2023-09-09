import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import { TEInput } from "tw-elements-react";

const COUNTRIES_QUERY = gql`
  query Query {
    countries {
      name
      native
      capital
      emoji
      currency
    }
  }
`;

const colorPalette = [
  "bg-blue-100",
  "bg-green-100",
  "bg-pink-100",
  "bg-yellow-100",
  "bg-rose-100",
  "bg-fuchsia-100",
  "bg-purple-100",
  "bg-violet-100",
  "bg-indigo-100",
];

function CountryList() {
  const { data } = useQuery(COUNTRIES_QUERY);
  const [filter, setFilter] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    if (data && data.countries.length > 0) {
      const selectedIndex = data.countries.length <= 10 ? data.countries.length - 1 : 9;
      setSelectedCountry(data.countries[selectedIndex]);
    }
  }, [data]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  const filteredCountries = data
    ? data.countries
        .filter((country) =>
          country.name.toLowerCase().includes(filter.toLowerCase())
        )
        .sort((a, b) => a.size - b.size)
    : [];

  return (
    <div className="p-5">
      <h1 className="text-center">Countries</h1>
      <div className="m-3 justify-center flex">
        <TEInput
          type="text"
          id="exampleFormControlInput1"
          label="Search and group..."
          value={filter}
          onChange={handleFilterChange}
          style={{ width: "350px", height: "40px" }}
          className=""
        ></TEInput>
      </div>
      <div className="m-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredCountries.map((country, index) => (
          <div
            key={country.name}
            onClick={() => handleCountryClick(country)}
            className={`p-4 border ${
              selectedCountry === country
                ? colorPalette[index % colorPalette.length] + " cursor-pointer"
                : "bg-white cursor-pointer"
            }`}
          >
            <div className="rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                {country.name}
              </div>
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  {country.native}
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  Capital: {country.capital}
                </p>
                <p className="text-base text-neutral-600 dark:text-neutral-200">
                  Flag: {country.emoji}
                </p>
              </div>
              <div className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                Currency: {country.currency}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountryList;

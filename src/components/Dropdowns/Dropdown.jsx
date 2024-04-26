import axios from "axios";
import React, { useEffect, useState } from "react";

const Dropdown = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  //   const [error, setError] = useState("Error");

  // For Country
  const getCountries = async () => {
    await axios
      .get("https://crio-location-selector.onrender.com/countries")
      .then((response) => setCountries(response.data))
      .catch((err) => console.log("Error Fetching Cuntries", err));
  };
  useEffect(() => {
    getCountries();
  }, []);

  //   console.log(countries);

  // For State
  const getStates = async (country) => {
    await axios
      .get(
        `https://crio-location-selector.onrender.com/country=${country}/states`
      )
      .then((response) => setStates(response.data))
      .catch((err) => console.log("Error Fetching States", err));
  };
  useEffect(() => {
    if (selectedCountry) {
      getStates(selectedCountry);
      setSelectedState("");
      setCities([]);
      setSelectedCity("");
    }
  }, [selectedCountry]);

  // For City
  const getCities = async (country, state) => {
    await axios
      .get(
        `https://crio-location-selector.onrender.com/country=${country}/state=${state}/cities`
      )
      .then((response) => {
        setCities(response.data);
      })
      .catch((err) => console.log("Error Fetching Cities", err));
  };
  useEffect(() => {
    if (selectedCountry && selectedState) {
      getCities(selectedCountry, selectedState);
      setSelectedCity("");
    }
  }, [selectedCountry, selectedState]);

  return (
    <>
      <h1>Select Location</h1>

      <select
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        <option disabled value="">
          Select Country
        </option>
        {countries.map((country) => {
          return (
            <option key={country} value={country}>
              {country}
            </option>
          );
        })}
      </select>
      <select
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
      >
        <option disabled value="">
          Select State
        </option>
        {states.map((state) => {
          return (
            <option key={state} value={state}>
              {state}
            </option>
          );
        })}
      </select>
      <select
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
      >
        <option disabled value="">
          Select City
        </option>
        {cities.map((city) => {
          return (
            <option key={city} value={city}>
              {city}
            </option>
          );
        })}
      </select>

      {selectedCity && (
        <p>
          <span style={{ fontWeight: "bold" }}>You selected</span>{" "}
          <span style={{ fontSize: "24px", fontWeight: "bold" }}>
            {selectedCity},{" "}
          </span>
          {selectedState}, {selectedCountry}
        </p>
      )}
    </>
  );
};

export default Dropdown;

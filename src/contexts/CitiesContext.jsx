import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

CitiesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const CitiesContext = createContext();

const BASE_URL = "http://localhost:8000";

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
        console.log("data");
        console.log(data);
      } catch (err) {
        console.error(err);
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);
  console.log(cities);
  console.log(isLoading);

  return (
    <CitiesContext.Provider value={{ cities, isLoading }}>
      {children}
    </CitiesContext.Provider>
  );
}

// You had the below code commented in your code files.
function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CititeContext was used outside the CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };

import React, { createContext, useState, useEffect } from 'react';

export const ContextApi = createContext();

function ContextProvider({ children }) {
  const [planetas, setPlanetas] = useState([]);

  useEffect(() => {
    const fetchPlanetas = async () => {
      const response = await fetch('https://swapi.dev/api/planets');
      const data = await response.json();
      const { results } = data;
      setPlanetas(results.filter((planeta) => delete planeta.residents));
    };
    fetchPlanetas();
  }, []);
  return (
    <ContextApi.Provider value={ { setPlanetas, planetas } }>
      {children}
    </ContextApi.Provider>
  );
}

export default ContextProvider;

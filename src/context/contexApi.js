import React, { createContext, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

export const ContextApi = createContext();

function ContextProvider({ children }) {
  const [planetas, setPlanetas] = useState([]);
  const [pesquisaInput, setPesquisaInput] = useState('');
  // const [filterPesq, setFilterPesq] = useState();

  useEffect(() => {
    const fetchPlanetas = async () => {
      const response = await fetch('https://swapi.dev/api/planets');
      const data = await response.json();
      const { results } = data;
      setPlanetas(results.filter((planeta) => delete planeta.residents));
    };
    fetchPlanetas();
  }, []);

  // useEffect(() => {
  //   const filterPlanetas = planetas.filter((planet) => planet.name.includes(pesquisaInput));
  //   setFilterPesq(filterPlanetas);
  // }, [pesquisaInput, planetas]);

  // if (pesquisaInput) {
  //   setFilterPesq(planetas.filter((planet) => planet.name.toLowerCase()
  //     .includes(pesquisaInput.toLowerCase())));
  // }

  const values = useMemo(() => ({
    setPlanetas,
    planetas,
    pesquisaInput,
    setPesquisaInput,

  }), [setPlanetas, setPesquisaInput, planetas, pesquisaInput]);

  return (
    <ContextApi.Provider
      value={ values }
    >
      {children}
    </ContextApi.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.shape(),
}.isReqired;

export default ContextProvider;

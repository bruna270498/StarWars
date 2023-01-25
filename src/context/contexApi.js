import React, { createContext, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

export const ContextApi = createContext();

function ContextProvider({ children }) {
  const [planetas, setPlanetas] = useState([]);
  const [pesquisaInput, setPesquisaInput] = useState('');
  const [filterPesq, setFilterPesq] = useState([]);
  const [selectColuna, setSelectColuna] = useState('population');
  const [selectOperador, setSelectOperador] = useState('maior que');
  const [inpuValor, setInputValor] = useState('0');

  useEffect(() => {
    const fetchPlanetas = async () => {
      const response = await fetch('https://swapi.dev/api/planets');
      const data = await response.json();
      const { results } = data;
      setPlanetas(results.filter((planeta) => delete planeta.residents));
    };
    fetchPlanetas();
  }, []);

  const values = useMemo(() => ({
    planetas,
    pesquisaInput,
    setPesquisaInput,
    filterPesq,
    setFilterPesq,
    selectColuna,
    setSelectColuna,
    selectOperador,
    setSelectOperador,
    inpuValor,
    setInputValor,

  }), [setPesquisaInput, planetas, pesquisaInput,
    filterPesq, selectColuna, setSelectColuna, selectOperador, setSelectOperador,
    inpuValor, setInputValor, setFilterPesq]);

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

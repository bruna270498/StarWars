import React, { useContext, useEffect } from 'react';
import { ContextApi } from '../context/contexApi';
import Header from './cabeçalho';

function Tabela() {
  const { pesquisaInput, planetas,
    filterPesq } = useContext(ContextApi);

  let planetaApi = planetas;

  if (filterPesq.length) {
    planetaApi = filterPesq.reduce((acc, curr) => {
      const { selectOperador: operador, selectColuna: colum, inpuValor: valor } = curr;
      if (operador === 'maior que') {
        return acc.filter((obj) => +obj[colum] > valor);
      } if (operador === 'menor que') {
        return acc.filter((obj) => +obj[colum] < valor);
      }
      return acc.filter((obj) => +obj[colum] === +valor);
    }, planetaApi);
  }
  const d = pesquisaInput.toLowerCase();
  const pesquisa = planetaApi.filter((a) => {
    const l = a.name.toLowerCase();
    return l.includes(d);
  });
  useEffect(() => {

  }, [filterPesq]);

  const tabelaPlanetas = () => pesquisa.map((planet) => (
    <tr key={ planet.name }>
      <td className="colna">{planet.name}</td>
      <td className="colna">{planet.rotation_period}</td>
      <td className="colna">{planet.orbital_period}</td>
      <td className="colna">{planet.diameter}</td>
      <td className="colna">{planet.climate}</td>
      <td className="colna">{planet.gravity}</td>
      <td className="colna">{planet.terrain}</td>
      <td className="colna">{planet.surface_water}</td>
      <td className="colna">{planet.population}</td>
      <td className="colna">{planet.created}</td>
      <td className="colna">{planet.edited}</td>
      <td className="colna">{planet.ur}</td>
    </tr>
  ));

  return (
    <div>
      <Header />
      <table className="tabela">
        <thead>
          <tr>
            <th className="cabeçalho">Name</th>
            <th className="cabeçalho">Rotation Period</th>
            <th className="cabeçalho">Orbital Period</th>
            <th className="cabeçalho">Diameter</th>
            <th className="cabeçalho">Climate</th>
            <th className="cabeçalho">Gravity</th>
            <th className="cabeçalho">Terrain</th>
            <th className="cabeçalho">Surface Water</th>
            <th className="cabeçalho">Population</th>
            <th className="cabeçalho">Created</th>
            <th className="cabeçalho">Edited</th>
            <th className="cabeçalho">URL</th>
          </tr>
        </thead>
        <tbody>{ tabelaPlanetas() }</tbody>
      </table>
    </div>
  );
}

export default Tabela;

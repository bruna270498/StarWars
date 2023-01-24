import React, { useContext, useEffect } from 'react';
import { ContextApi } from '../context/contexApi';
import Header from './cabeçalho';

function Tabela() {
  const { pesquisaInput, planetas, setFilterPesq, filterPesq } = useContext(ContextApi);

  useEffect(() => {
    const planetaFilter = planetas.filter((e) => e.name.includes(pesquisaInput));
    setFilterPesq(planetaFilter);
  }, [planetas, pesquisaInput, setFilterPesq]);

  const tabelaPlanetas = () => filterPesq.map((planet) => (
    <tr key={ planet.name }>
      <td>{planet.name}</td>
      <td>{planet.rotation_period}</td>
      <td>{planet.orbital_period}</td>
      <td>{planet.diameter}</td>
      <td>{planet.climate}</td>
      <td>{planet.gravity}</td>
      <td>{planet.terrain}</td>
      <td>{planet.surface_water}</td>
      <td>{planet.population}</td>
      <td>{planet.films}</td>
      <td>{planet.created}</td>
      <td>{planet.edited}</td>
      <td>{planet.ur}</td>
    </tr>
  ));

  return (
    <div>
      <Header />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>{ tabelaPlanetas() }</tbody>
      </table>
    </div>
  );
}

export default Tabela;

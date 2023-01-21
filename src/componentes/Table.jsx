import React, { useState, useEffect } from 'react';

function Tabela() {
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
  const tabelaPlanetas = () => planetas.map((planet) => (
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
    <table>
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
      <tbody>{ tabelaPlanetas() }</tbody>
    </table>
  );
}

export default Tabela;

import React from 'react';

export default function Header() {
  return (
    <div>
      <h1> Projeto Star Wars - Trybe</h1>
      <input />
      <tbody>
        <td>
          <label htmlFor="coluna">
            Coluna
            <select name="coluna">
              <option>População</option>
              <option>Período Orbital</option>
              <option>Diâmetro</option>
              <option>Período Rotação</option>
              <option>Água da Surpefície</option>
            </select>
          </label>
          <label htmlFor="operador">
            operador
            <select name="operador">
              <option>menor que</option>
              <option>maior que</option>
              <option>igual a</option>
            </select>
          </label>
          <input type="number" />
          <button type="button">Filtrar</button>
          <label htmlFor="coluna">
            Ordenar
            <select name="coluna">
              <option>População</option>
              <option>Período Orbital</option>
              <option>Diâmetro</option>
              <option>Período Rotação</option>
              <option>Água da Surpefície</option>
            </select>
          </label>
          <label htmlFor="desAcres">
            ascendente
            <input type="radio" name="desAcres" value="ascendente" />
          </label>
          <label htmlFor="desAcres">
            descendente
            <input type="radio" name="desAcres" value="descendente" />
          </label>
          <button type="button">Ordenar</button>
        </td>
      </tbody>
    </div>
  );
}

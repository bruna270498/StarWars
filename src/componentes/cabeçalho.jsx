import React, { useContext } from 'react';
import { ContextApi } from '../context/contexApi';

export default function Header() {
  const { pesquisaInput, setPesquisaInput,
    setSelectColuna, setSelectOperador, setInputValor,
    selectColuna, selectOperador, inpuValor, setFilterPesq,
    filterPesq } = useContext(ContextApi);

  // const BotaoFilter = () => {
  //   const selectOpitions = {
  //     colum: selectColuna,
  //     valor: inpuValor,
  //     operador: selectOperador,
  //   };

  //   if (selectOperador === 'menor que') {
  //     const filterPlanetas = planetas.filter(
  //       (coluna) => Number(coluna[selectColuna])
  //       < Number(inpuValor),
  //     );
  //     // setFilterPesq(filterPlanetas);
  //     setMultiplosFilters([...filterPlanetas]);
  //   } if (selectOperador === 'maior que') {
  //     const filterPlanetas = planetas.filter(
  //       (coluna) => Number(coluna[selectColuna]) > Number(inpuValor),
  //     );
  //     // setFilterPesq(filterPlanetas);
  //     setMultiplosFilters([...filterPlanetas]);
  //   } if (selectOperador === 'igual a') {
  //     const filterPlanetas = planetas.filter(
  //       (coluna) => Number(coluna[selectColuna])
  //         === Number(inpuValor),
  //     );
  //     // setFilterPesq(filterPlanetas);
  //     setMultiplosFilters([...filterPlanetas]);
  //   }
  //   setListFilter([...listFilter, selectOpitions]);
  // };
  // console.log(multiplosFilters, filterPesq);

  // listFilter.forEach(({ valor, colum, operador }) => {
  // });

  return (
    <div>
      <h1> Projeto Star Wars - Trybe</h1>
      <input
        data-testid="name-filter"
        value={ pesquisaInput }
        type="text"
        onChange={ (e) => setPesquisaInput(e.target.value) }

      />
      <form>
        <label htmlFor="coluna">
          Coluna
          <select
            name="coluna"
            data-testid="column-filter"
            onChange={ (e) => setSelectColuna(e.target.value) }
          >
            <option>population</option>
            <option>orbital_period</option>
            <option>diameter</option>
            <option>rotation_period</option>
            <option>surface_water</option>
          </select>
        </label>
        <label htmlFor="operador">
          operador
          <select
            name="operador"
            data-testid="comparison-filter"
            onChange={ (e) => setSelectOperador(e.target.value) }
          >
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
        </label>
        <input
          type="number"
          placeholder="0"
          data-testid="value-filter"
          value={ inpuValor }
          onChange={ (e) => setInputValor(e.target.value) }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => setFilterPesq(
            [...filterPesq, { selectColuna, inpuValor, selectOperador }],
          ) }
        >
          Filtrar

        </button>
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
      </form>
      { filterPesq.map((e, i) => (
        <ul key={ i }>
          <li>
            {
              `${e.selectColuna} ${e.selectOperador} ${e.inpuValor}`
            }
          </li>
        </ul>
      ))}
    </div>
  );
}

import React, { useContext, useEffect } from 'react';
import { ContextApi } from '../context/contexApi';

export default function Header() {
  const { pesquisaInput, setPesquisaInput,
    setSelectColuna, setSelectOperador, setInputValor,
    selectColuna, selectOperador, inpuValor, setFilterPesq,
    filterPesq, optionsColum, setOptionsColum } = useContext(ContextApi);

  const options = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];

  useEffect(() => {
    setOptionsColum(options);
  }, []);

  const deleteOption = optionsColum.filter((r) => r !== selectColuna);

  function removeFilter(event, option) {
    const optionSelecionado = filterPesq[event.target.value];
    const filtroRemovido = filterPesq.filter((o) => o !== optionSelecionado);
    setOptionsColum([...optionsColum, option]);
    setFilterPesq(filtroRemovido);
  }

  function removerTodosFiltros() {
    const arrayFiltros = [];
    setFilterPesq(arrayFiltros);
  }

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

            {optionsColum.map((e) => (
              <option
                key={ e }
              >
                {e}
              </option>))}
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
          onClick={ () => [setFilterPesq(
            [...filterPesq, { selectColuna, inpuValor, selectOperador }],
          ), setOptionsColum(deleteOption), setSelectColuna(deleteOption[0])] }
        >
          Filtrar

        </button>

        <label htmlFor="coluna">
          Ordenar
          <select data-testid="column-sort" name="coluna">
            {optionsColum.map((e) => (
              <option
                key={ e }
              >
                {e}
              </option>))}
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
        <button data-testid="column-sort-button" type="button">Ordenar</button>
        <button
          type="button"
          data-testid="button-remove-filters"
          onClick={ removerTodosFiltros }
        >
          Remover Filtros

        </button>
      </form>
      { filterPesq.map((e, i) => (
        <ul key={ i }>
          <li data-testid="filter">
            {
              `${e.selectColuna} ${e.selectOperador} ${e.inpuValor}`
            }
            <button
              value={ i }
              onClick={ (event) => removeFilter(event, e.selectColuna) }
            >
              X

            </button>
          </li>
        </ul>
      ))}
    </div>
  );
}

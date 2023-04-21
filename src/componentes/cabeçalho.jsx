import React, { useContext, useEffect } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
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
      <div className="divTitulo1">
        <div className="divTitulo2">
          {' '}
          <h1 className="titulo">
            Star
          </h1>
          <h1 className="titulo2">Wars</h1>
        </div>

      </div>
      <input
        className="inputPesquisa"
        data-testid="name-filter"
        value={ pesquisaInput }
        type="text"
        onChange={ (e) => setPesquisaInput(e.target.value) }

      />
      <form className="formPesq">
        <label className="filtros coluna" htmlFor="coluna">
          Coluna :
          <select
            className="optionsSelect"
            name="coluna"
            data-testid="column-filter"
            onChange={ (e) => setSelectColuna(e.target.value) }
          >

            {optionsColum.map((e) => (
              <option
                className="options"
                key={ e }
              >
                {e}
              </option>))}
          </select>
        </label>
        <label className="filtros coluna" htmlFor="operador">
          Operador :
          <select
            name="operador"
            data-testid="comparison-filter"
            className="optionsSelect"
            onChange={ (e) => setSelectOperador(e.target.value) }
          >
            <option className="options">maior que</option>
            <option className="options">menor que</option>
            <option className="options">igual a</option>
          </select>
        </label>
        <input
          type="number"
          placeholder="0"
          data-testid="value-filter"
          className="filtros"
          value={ inpuValor }
          onChange={ (e) => setInputValor(e.target.value) }
        />
        <button
          type="button"
          data-testid="button-filter"
          className="btnFiltros"
          onClick={ () => [setFilterPesq(
            [...filterPesq, { selectColuna, inpuValor, selectOperador }],
          ), setOptionsColum(deleteOption), setSelectColuna(deleteOption[0])] }
        >
          Filtrar

        </button>
        <button
          type="button"
          className="btnFiltros"
          data-testid="button-remove-filters"
          onClick={ removerTodosFiltros }
        >
          Remover Filtros

        </button>
      </form>
      { filterPesq.map((e, i) => (
        <ul key={ i }>
          <li className="listFilter" data-testid="filter">
            {
              `${e.selectColuna} ${e.selectOperador} ${e.inpuValor}`
            }
            <button
              value={ i }
              className="iconRemove"
              onClick={ (event) => removeFilter(event, e.selectColuna) }
            >
              <AiOutlineDelete />
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
}

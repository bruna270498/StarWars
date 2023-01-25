import React from 'react';
import { render, screen } from '@testing-library/react';	
import App from '../App';
import APImock from '../mocks/Apimocks';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import Table from '../componentes/Table';
import ContextProvider from '../context/contexApi';


describe('Testa o funcionamento da página', () => {

  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      json: async () => APImock,
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Testa se a página possui um título "Starwars Planet Search"', () => {
  render(<App />);
   const linkElement = screen.getByRole('heading', {  name: /projeto star wars \- trybe/i})
  expect(linkElement).toBeInTheDocument();
  });

  it('Testa se a página possui um campo de input', () => {
  render(<App />);
  const inputElement = screen.getByRole('textbox');
  expect(inputElement).toBeInTheDocument();
  });

  it('Testa se a página possui um botão de filtro', () => {
  render(<App />);
  const filterButton = screen.getByTestId('button-filter');
  expect(filterButton).toBeInTheDocument();
  });

  it('Testa se a página possui uma tabela', () => {
  render(<App />);
  const tableElement = screen.getByRole('table');
  expect(tableElement).toBeInTheDocument();
  });

  it('Testa se a API Star Wars é chamada corretamente', () => {
  render(<App />);
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith('https://swapi.dev/api/planets');
  });

  it('Testa se os inputs de pesquisa são renderizados corretamente', () => {
    render(
      <ContextProvider>
        <Table />
      </ContextProvider>);
    const filterByName = screen.getByTestId('name-filter');
    const columnFilter = screen.getByTestId('column-filter');
    const comparisonFilter = screen.getByTestId('comparison-filter');
    const valueFilter = screen.getByTestId('value-filter');

    expect(filterByName).toBeInTheDocument();
    expect(columnFilter).toBeInTheDocument();
    expect(comparisonFilter).toBeInTheDocument();
    expect(valueFilter).toBeInTheDocument();

  });

  it('Testa se, ao digitar no input de texto, é feita a filtragem corretamente', async () => {
    render(
      <ContextProvider>
        <Table />
      </ContextProvider>);
    const filterByName = screen.getByTestId('name-filter');
    await act(async () => {
      userEvent.type(filterByName, 'oo');
    });

    const planetName = screen.getByRole('cell', {  name: /tatooine/i })
    expect(planetName).toBeInTheDocument();
  });

  it('Testa o componente tabela', () => {
    render(
      <ContextProvider>
      <Table />
    </ContextProvider>);
    const header = screen.getByRole('columnheader', {  name: /diameter/i });
    expect(header).toBeInTheDocument();
  });

  it('Testa a função de clique do botão Filter', () => {
    render(
      <ContextProvider>
      <Table />
    </ContextProvider>);

    const columnFilter = screen.getByTestId('column-filter');
    expect(columnFilter).toHaveValue('population');

    userEvent.selectOptions(columnFilter, 'orbital_period');

    const comparisonFilter = screen.getByTestId('comparison-filter');
    expect(comparisonFilter).toHaveValue('maior que');

    userEvent.selectOptions(comparisonFilter, 'menor que');

    const valueFilter = screen.getByTestId('value-filter');
    expect(valueFilter).toHaveValue(0);

    userEvent.type(valueFilter, '400');

    const filterButton = screen.getByTestId('button-filter');
    userEvent.click(filterButton);
  });
});

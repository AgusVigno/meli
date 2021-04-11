import React from 'react';
import { render, screen } from '../utils/test';
import '@testing-library/jest-dom/extend-expect';
import Items from '../pages/items';
import { INITIAL_STATE } from '../mocks/initialState';

describe('render <Items />', () => {
  test('renders Listado de Productos', async () => {
    render(
      <Items error={jest.fn()} products={jest.fn()} categories={jest.fn()} />,
      { initialState: INITIAL_STATE }
    );

    // se valida que este renderizado el logo
    const logo = screen.getByTestId('logo');
    expect(logo).toBeInTheDocument();
    expect(logo.tagName).toBe('IMG');

    // se valida que este renderizada la barra de búsqueda
    const search = screen.getByTestId('input-submit');
    expect(search.tagName).toBe('INPUT');
    expect(
      screen.getByPlaceholderText('Nunca dejes de buscar')
    ).toBeInTheDocument();

    // se valida que este renderizado el breadcrumb
    const breadcrumb = screen.getByTestId('breadcrumb');
    expect(breadcrumb).toBeInTheDocument();

    // se valida que haya 4 productos en el listado
    expect(screen.getAllByTestId('producto').length).toBe(4);
  });
});

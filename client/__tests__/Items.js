import React from 'react';
import { render, screen } from '../utils/test';
import '@testing-library/jest-dom/extend-expect';
import Items from '../pages/items';
import { INITIAL_STATE } from '../mocks/initialState';
import { CATEGORIES } from '../mocks/categories';

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
    const breadcrumb = screen.getAllByTestId('breadcrumb');
    expect(breadcrumb.length).toBe(CATEGORIES.length);

    // se valida que haya 4 productos en el listado
    expect(screen.getAllByTestId('producto').length).toBe(4);

    // se valida que cada producto este renderizado correctamente
    expect(screen.getAllByTestId('producto-imagen').length).toBe(4);
    expect(screen.getAllByTestId('producto-precio').length).toBe(4);
    expect(screen.getAllByTestId('producto-titulo').length).toBe(4);
    expect(screen.getAllByTestId('producto-ubicacion').length).toBe(4);
  });
});

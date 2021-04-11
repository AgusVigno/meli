import React from 'react';
import { render, screen } from '../utils/test';
import '@testing-library/jest-dom/extend-expect';
import Home from '../pages/index';

describe('render <Home />', () => {
  test('renders del Home', () => {
    render(<Home />);

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

    // se valida que no haya ningun producto mostrandose
    expect(screen.queryAllByTestId('producto').length).toBe(0);
  });
});

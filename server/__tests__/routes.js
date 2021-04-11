const app = require('../server');
const supertest = require('supertest');
const request = supertest(app);

const productId = 'MLA810890986';
const categoryId = 'MLA47769';

describe('Obtener listado productos', () => {
  test('busqueda de producto', async (done) => {
    const response = await request.get('/api/items?q=termos');
    expect(response.status).toBe(200);
    // check tipo y cantidad
    expect(Array.isArray(response.body.items)).toBeTruthy();
    expect(Array.isArray(response.body.categories)).toBeTruthy();
    expect(response.body.items.length).toEqual(4);
    expect(response.body.categories.length).toBeGreaterThan(0);

    // check data
    expect(response.body.items).toBeDefined();
    expect(response.body.author).toBeDefined();
    expect(response.body.categories).toBeDefined();
    done();
  });
  test('busqueda vacía', async (done) => {
    const response = await request.get('/api/items?q=');
    expect(response.status).toBe(200);
    // check tipo y cantidad
    expect(Array.isArray(response.body.items)).toBeTruthy();
    expect(response.body.items.length).toBe(0);
    expect(response.body.categories.length).toBe(0);

    // check data
    expect(response.body.items).toBeDefined();
    expect(response.body.author).toBeDefined();
    expect(response.body.categories).toBeDefined();
    done();
  });
});

describe('Obtener detalle producto', () => {
  test('ID válido', async (done) => {
    const response = await request.get(`/api/items/${productId}`);
    expect(response.status).toBe(200);
    // check tipo y data
    expect(response.body.item.id).toBe(productId);
    expect(response.body.item).toBeDefined();
    expect(response.body.author).toBeDefined();
    expect(response.body.item.title).toBeDefined();
    expect(response.body.item.picture).toBeDefined();
    expect(response.body.item.condition).toBeDefined();
    expect(response.body.item.free_shipping).toBeDefined();
    expect(Number.isInteger(response.body.item.sold_quantity)).toBeTruthy();
    expect(response.body.item.description).toBeDefined();
    expect(response.body.item.category_id).toBeDefined();
    done();
  });
  test('ID inválido', async (done) => {
    const response = await request.get('/api/items/id-invalido');
    expect(response.status).toBe(404);
    done();
  });
});

describe('Obtener categorías producto', () => {
  test('ID válido', async (done) => {
    const response = await request.get(`/api/categories/${categoryId}`);
    expect(response.status).toBe(200);
    // check tipo y data
    expect(response.body.id).toBe(categoryId);
    expect(response.body.name).toBeDefined();
    expect(response.body.path_from_root).toBeDefined();
    expect(Array.isArray(response.body.path_from_root)).toBeTruthy();
    expect(response.body.path_from_root.length).toBeGreaterThan(0);
    done();
  });
  test('ID inválido', async (done) => {
    const response = await request.get('/api/categories/id-invalido');
    expect(response.status).toBe(404);
    done();
  });
});

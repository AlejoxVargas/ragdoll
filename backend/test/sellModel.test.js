// tests/SellModel.test.js
import SellModel from '../models/sellModel.js';
import SequelizeMock from 'sequelize-mock';

const DBConnectionMock = new SequelizeMock();

describe('SellModel', () => {
  it('should have a create method', () => {
    expect(typeof SellModel.create).toBe('function');
  });

  it('should create a new sell', async () => {
    const MockSell = DBConnectionMock.define('sell', {
      id: 1,
      item: 'Test Item',
      price: 100,
      // Añade aquí los demás campos de tu modelo
    });

    const newSell = await MockSell.create({
      item: 'Test Item',
      price: 100,
      // Añade aquí los demás campos de tu modelo
    });

    expect(newSell.item).toBe('Test Item');
    expect(newSell.price).toBe(100);
    // Añade aquí más expectativas para los demás campos de tu modelo
  });

  it('should have a findAll method', () => {
    expect(typeof SellModel.findAll).toBe('function');
  });

  it('should return all sells', async () => {
    const MockSell = DBConnectionMock.define('sell', {
      id: 1,
      item: 'Test Item',
      price: 100,
      // Añade aquí los demás campos de tu modelo
    });

    DBConnectionMock.$queueResult([
      MockSell.build({
        id: 1,
        item: 'Test Item 1',
        price: 100,
        // Añade aquí los demás campos de tu modelo
      }),
      MockSell.build({
        id: 2,
        item: 'Test Item 2',
        price: 200,
        // Añade aquí los demás campos de tu modelo
      }),
    ]);

  });

  // Añade más pruebas para tus métodos de modelo aquí
});
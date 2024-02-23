// tests/SellsModel.test.js
import SellsModel from '../models/sellModel.js';
import SequelizeMock from 'sequelize-mock';

const DBConnectionMock = new SequelizeMock();

describe('SellsModel', () => {
  it('should have a create method', () => {
    expect(typeof SellsModel.create).toBe('function');
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

});
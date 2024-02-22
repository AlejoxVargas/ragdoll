// tests/controller.test.js
import { getAllBuys, getOneBuy, createBuy } from "../controllers/Controller";
import BuyModel from "../models/BuyModel";

jest.mock("../models/BuyModel");

describe("BuySellController", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should get all buys", async () => {
    const mockBuys = [
      { id: 1, title: "Test Buy 1" },
      { id: 2, title: "Test Buy 2" },
    ];
    BuyModel.findAll.mockResolvedValue(mockBuys);

    const req = {};
    const res = { json: jest.fn() };

    await getAllBuys(req, res);

    expect(res.json).toHaveBeenCalledWith(mockBuys);
  });

  it("should get one buy", async () => {
    const mockBuy = { id: 1, title: "Test Buy" };
    BuyModel.findByPk.mockResolvedValue(mockBuy);

    const req = { params: { id: 1 } };
    const res = { json: jest.fn() };

    await getOneBuy(req, res);

    expect(res.json).toHaveBeenCalledWith(mockBuy);
  });

  it("should create a buy", async () => {
    const mockBuy = { title: "Test Buy" };
    BuyModel.create.mockResolvedValue(mockBuy);

    const req = { body: mockBuy };
    const res = { status: jest.fn(() => res), json: jest.fn() };

    await createBuy(req, res);

    expect(BuyModel.create).toHaveBeenCalledWith(mockBuy);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      message: "Compra creada correctamente",
    });
  });
});

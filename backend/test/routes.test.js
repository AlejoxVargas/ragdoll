// tests/routes.test.js
import request from "supertest";
import app from "../app";

describe("routes", () => {

  it("should respond with a 404 for non-existent routes", async () => {
    const res = await request(app).get("/non-existent-route");
    expect(res.statusCode).toEqual(404);
  });

  it("should respond with a 200 and an array for the /buys route", async () => {
    const res = await request(app).get("/buys");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("should respond with a 200 and an array for the /sells route", async () => {
    const res = await request(app).get("/sells");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  // Añade pruebas para las rutas POST, PUT y DELETE aquí
});
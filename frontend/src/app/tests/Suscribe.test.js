import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Suscribe from "../Suscribe";

test("Tiene el contenido que se espera", () => {
  render(<Suscribe />);

  const titleElement = screen.getByText(/Subscribete a nuestra newsletter/i);
  expect(titleElement).toBeInTheDocument();

  const textElement = screen.getByText(
    /No pierdas el hilo de nuestras promociones/i
  );
  expect(textElement).toBeInTheDocument();

  const emailInput = screen.getByPlaceholderText("Email");
  expect(emailInput).toBeInTheDocument();

  const subscribeButton = screen.getByText(/Subscribete/i);
  expect(subscribeButton).toBeInTheDocument();
});

test("button suscribe funciona", () => {
  render(<Suscribe />);

  const emailInput = screen.getByPlaceholderText("Email");
  fireEvent.change(emailInput, { target: { value: "test@example.com" } });

  const subscribeButton = screen.getByText(/Subscribete/i);
  fireEvent.click(subscribeButton);

  expect(window.location.href).toBe("URL_ESPERADA_PARA_SUBSCRIBIRSE");
});

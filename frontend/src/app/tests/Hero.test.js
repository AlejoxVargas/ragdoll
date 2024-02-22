import { render, screen, fireEvent } from "@testing-library/react";
import Hero from "../Components/Hero";

test("links en el componente Hero funciona", () => {
  render(<Hero />);

  const sellLink = screen.getByText(/Quiero vender/i);
  const buyLink = screen.getByText(/Quiero comprar/i);

  fireEvent.click(sellLink);

  expect(window.location.href).toBe("URL_ESPERADA_PARA_QUIERO_VENDER");

  fireEvent.click(buyLink);

  expect(window.location.href).toBe("URL_ESPERADA_PARA_QUIERO_COMPRAR");
});

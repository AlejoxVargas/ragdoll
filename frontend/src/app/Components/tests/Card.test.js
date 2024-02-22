import { render, screen } from "@testing-library/react";
import Card from "../Card";

test("renders Card component with correct content", () => {
  render(<Card />);

  const titleElement = screen.getByText(/Tailwind card/i);
  expect(titleElement).toBeInTheDocument();

  const textElement = screen.getByText(/Lorem ipsum dolor sit amet/i);
  expect(textElement).toBeInTheDocument();

  const addButton = screen.getByText(/Añadir/i);
  const deleteButton = screen.getByText(/Borrar/i);
  expect(addButton).toBeInTheDocument();
  expect(deleteButton).toBeInTheDocument();
});
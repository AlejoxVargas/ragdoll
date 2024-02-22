import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../Button";

test("si Button tiene el texto correcto", () => {
  const buttonText = "Añadir";
  render(<Button text={buttonText} />);

  const buttonElement = screen.getByRole("button", { name: buttonText });
  expect(buttonElement).toBeInTheDocument();

  expect(buttonElement).toHaveClass("rounded-lg");
  expect(buttonElement).toHaveClass("bg-[#a62139]");
});

test("si funciona con el clic el Button", () => {
  const handleClick = jest.fn();

  render(<Button text="Click me" onClick={handleClick} />);

  const button = screen.getByRole("button");
  userEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
});

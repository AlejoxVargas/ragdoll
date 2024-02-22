import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar";

test("renders Navbar component", () => {
  render(<Navbar />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Navbar component with all links", () => {
  render(<Navbar />);

  const homeLink = screen.getByText(/home/i);
  const aboutLink = screen.getByText(/about/i);
  const contactLink = screen.getByText(/contact/i);

  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
});

import { render, screen } from "@testing-library/react";
import Footer from "../Components/Footer";

test("Si Footer tiene el  texto y links", () => {
  render(<Footer />);

  const mainTextElement = screen.getByText(/Listo para subir tus retales/i);
  expect(mainTextElement).toBeInTheDocument();

  const startButton = screen.getByText(/Comenzar/i);
  expect(startButton).toBeInTheDocument();
  expect(startButton).toHaveAttribute("href", "#");

  const contactLink = screen.getByText(/Contact/i);
  const pricingLink = screen.getByText(/Pricing/i);
  const privacyLink = screen.getByText(/Privacy/i);
  const termsLink = screen.getByText(/Terms/i);
  const twitterLink = screen.getByText(/Twitter/i);
  expect(contactLink).toBeInTheDocument();
  expect(pricingLink).toBeInTheDocument();
  expect(privacyLink).toBeInTheDocument();
  expect(termsLink).toBeInTheDocument();
  expect(twitterLink).toBeInTheDocument();
});

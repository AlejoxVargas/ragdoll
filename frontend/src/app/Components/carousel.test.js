// Carousel.test.js

import React from 'react';
import { render } from '@testing-library/react';
import Carousel from './../Components/Carousel.jsx';

describe('Carousel Component', () => {
  test('renders without crashing', () => {
    render(<Carousel />);
  });

  test('renders carousel items', () => {
    const { getAllByTestId } = render(<Carousel />);
    const carouselItems = getAllByTestId('carousel-item'); // Update to 'carousel-item'
    expect(carouselItems.length).toBe(5); // Assuming there are 5 carousel items
  });

  test('renders carousel indicators', () => {
    const { getAllByTestId } = render(<Carousel />);
    const carouselIndicators = getAllByTestId('carousel-slide-to'); // Update to 'carousel-slide-to'
    expect(carouselIndicators.length).toBe(5); // Assuming there are 5 carousel indicators
  });

  test('renders previous button', () => {
    const { getByTestId } = render(<Carousel />);
    const previousButton = getByTestId('carousel-prev'); // Update to 'carousel-prev'
    expect(previousButton).toBeInTheDocument();
  });

  test('renders next button', () => {
    const { getByTestId } = render(<Carousel />);
    const nextButton = getByTestId('carousel-next'); // Update to 'carousel-next'
    expect(nextButton).toBeInTheDocument();
  });
});


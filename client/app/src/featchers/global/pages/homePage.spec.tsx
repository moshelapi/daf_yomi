// import { describe, it, expect, vi } from 'vitest';
// import { render, screen } from '@testing-library/react';
// import { BrowserRouter } from 'react-router-dom';
// import HomePage from './HomePage';

// // Mock useNavigate
// vi.mock('react-router-dom', () => ({
//   ...vi.importActual('react-router-dom'), // Retain the original functionalities
//   useNavigate: vi.fn(), // Mock useNavigate
// }));

// describe('HomePage', () => {
//   it('if exist', () => {
//     // Wrap the component in BrowserRouter to provide the router context
//     render(
//       <BrowserRouter>
//         <HomePage />
//       </BrowserRouter>
//     );

//     // Use the appropriate query to find your element, e.g., getByText if you know the text content
//     const firstButton = screen.getByRole('HomePageTop');

//     // Use toBeInTheDocument to check if the element exists
//     expect(firstButton).toBeInTheDocument();
//   });
// });

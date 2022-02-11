import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('should go to new page if img is clicked', async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const imgUrl = await screen.findByRole('img', { name: /abdullah/i });
  userEvent.click(imgUrl);

  const heading = await screen.findByRole('heading', { name: /abdullah/i });
  const img = screen.getByRole('img', { name: /abdullah/i });
  const urlHeading = screen.getByRole('heading', { name: /api url for this character is:/i });
  const url = screen.getByText(/https:\/\/api\.disneyapi\.dev\/characters\/16/i);

  expect(heading).toBeInTheDocument();
  expect(img).toBeInTheDocument();
  expect(urlHeading).toBeInTheDocument();
  expect(url).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import Home from './Home';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { mockCharacters } from '../../__mock__/testdata';
import { MemoryRouter } from 'react-router-dom';

const server = setupServer(
  rest.get(`https://api.disneyapi.dev/characters`, (req, res, ctx) => {
    return res(ctx.json(mockCharacters));
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());

test('should render loading state', () => {
  render(<Home />);

  const loading = screen.getByText(/loading/i);

  expect(loading).toBeInTheDocument();
});

test('Should render character list', async () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  const heading = await screen.findByRole('heading', { name: /disney/i });
  const characterName = screen.getByRole('heading', { name: /627/i });
  const characterImg = screen.getByAltText(/627/i);

  expect(heading).toBeInTheDocument();
  expect(characterName).toBeInTheDocument();
  expect(characterImg).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import Character from './Character';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { mockSingleCharacters } from '../../__mock__/testdata';

const server = setupServer(
  rest.get(`https://api.disneyapi.dev/characters/`, (req, res, ctx) => {
    return res(ctx.json(mockSingleCharacters));
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());

test.skip('Should render a single character', async () => {
  render(<Character />);

  const characterName = screen.getByRole('heading', { name: /627/i });
  const characterImg = screen.getByAltText(/627/i);

  expect(characterName).toBeInTheDocument();
  expect(characterImg).toBeInTheDocument();
});

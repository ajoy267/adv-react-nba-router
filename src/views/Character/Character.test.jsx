import { render, screen } from '@testing-library/react';
import Character from './Character';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { mockSingleCharacter } from '../../__mock__/testdata';
import { MemoryRouter } from 'react-router-dom';

const server = setupServer(
  rest.get(`https://api.disneyapi.dev/characters/:characterId`, (req, res, ctx) => {
    return res(ctx.json(mockSingleCharacter));
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());

test('Should render a single character', async () => {
  render(
    <MemoryRouter initialEntries={['/', '/characters/:characterId']} initialIndex={1}>
      <Character />
    </MemoryRouter>
  );

  const characterName = await screen.findByRole('heading', { name: /627/i });
  const characterImg = screen.getByAltText(/627/i);

  expect(characterName).toBeInTheDocument();
  expect(characterImg).toBeInTheDocument();
});

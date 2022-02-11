export async function fecthCharacters() {
  const resp = await fetch(`https://api.disneyapi.dev/characters`);
  const data = await resp.json();

  return data;
}

export async function fecthCharacterbyId(characterId) {
  const resp = await fetch(`https://api.disneyapi.dev/characters/${characterId}`);
  const data = await resp.json();

  return data;
}

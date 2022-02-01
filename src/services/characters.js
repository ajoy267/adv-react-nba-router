export async function fecthCharacters() {
  const resp = await fetch(`https://api.disneyapi.dev/characters`);
  const data = await resp.json();
  console.log('data', data.data);

  return data;
}

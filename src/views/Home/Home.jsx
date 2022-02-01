import React, { useEffect, useState } from 'react';
import CharacterList from '../../components/CharacterList/CharacterList';
import { fecthCharacters } from '../../services/characters';

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCharacters = async () => {
      const resp = await fecthCharacters();
      setCharacters(resp.data);
      setLoading(false);
    };
    if (loading) {
      getCharacters();
    }
  }, [loading]);
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <CharacterList characters={characters} />
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { fecthCharacters } from '../../services/characters';

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCharacters = async () => {
      const resp = await fecthCharacters();
      setCharacters(resp);
      setLoading(false);
    };
    if (loading) {
      getCharacters();
    }
  }, [loading]);
  if (loading) return <p>Loading...</p>;

  return <div>Home</div>;
}

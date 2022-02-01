import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CharacterDetails from '../../components/CharacterDetails/CharacterDetails';
import { fecthCharacterbyId } from '../../services/characters';

export default function Character() {
  const [details, setDetails] = useState({});
  const { characterId } = useParams();

  useEffect(() => {
    const getDetails = async () => {
      const resp = await fecthCharacterbyId(characterId);
      setDetails(resp);
    };
    getDetails();
  }, [characterId]);

  const { name, imageUrl, url } = details;

  return (
    <div>
      <CharacterDetails name={name} imageUrl={imageUrl} url={url} />
    </div>
  );
}

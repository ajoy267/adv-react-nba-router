import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import CharacterDetails from '../../components/CharacterDetails/CharacterDetails';
import { fecthCharacterbyId } from '../../services/characters';
import './Character.css';

export default function Character() {
  const [details, setDetails] = useState({});
  const { characterId } = useParams();
  const history = useHistory();

  useEffect(() => {
    const getDetails = async () => {
      const resp = await fecthCharacterbyId(characterId);
      setDetails(resp);
    };
    getDetails();
  }, [characterId]);

  const handleClick = () => {
    history.push('/');
  };

  const { name, imageUrl, url } = details;

  return (
    <div>
      <button onClick={handleClick}>Back</button>
      <CharacterDetails name={name} imageUrl={imageUrl} url={url} />
    </div>
  );
}

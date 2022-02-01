import React from 'react';
import { Link } from 'react-router-dom';

export default function CharacterList({ characters }) {
  return (
    <div>
      <h1>Disney Characters</h1>
      {characters.map((item) => (
        <div key={item._id}>
          <h2>{item.name}</h2>
          <Link to={`/characters/${item._id}`}>
            <p>
              <img src={item.imageUrl} alt={item.name} />
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}

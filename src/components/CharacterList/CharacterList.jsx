import React from 'react';

export default function CharacterList({ characters }) {
  return (
    <div>
      <h1>Disney Characters</h1>
      {characters.map((item) => (
        <div key={item._id}>
          <h2>{item.name}</h2>
          <img src={item.imageUrl} alt={item.name} />
        </div>
      ))}
    </div>
  );
}

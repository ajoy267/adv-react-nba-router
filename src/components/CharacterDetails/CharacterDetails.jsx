import React from 'react';

export default function CharacterDetails({ name, imageUrl, url }) {
  return (
    <div>
      <h1>{name}</h1>
      <img src={imageUrl} alt={name} />
      <h4>API Url for this character is: </h4>
      <p>{url}</p>
    </div>
  );
}

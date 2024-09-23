import React from 'react';
import Button from './Button';

const ButtonList = () => {
  const buttonNames = ["All", "Music", "Mixes", "Dubbing", "Movie", "T-Series", "News", "Coding"];

  return (
    <div className='flex'>
      {buttonNames.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  );
}

export default ButtonList;

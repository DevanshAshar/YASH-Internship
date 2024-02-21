import React, { useState } from 'react';
import Bird from './Bird';
import Animal from './Animal';

const LivingThings = () => {
  const [showAnimals, setShowAnimals] = useState(false);
  const [showBirds, setShowBirds] = useState(false);

  const showAnimalComponent = () => {
    setShowAnimals(true);
    setShowBirds(false);
  };

  const showBirdComponent = () => {
    setShowAnimals(false);
    setShowBirds(true);
  };

  return (
    <div>
      <button onClick={showAnimalComponent}>Animals</button>
      <button onClick={showBirdComponent}>Birds</button>
      
      {showAnimals && <Animal name='animal' description='animal para'/>}
      {showBirds && <Bird name='bird' description='bird para'/>}
    </div>
  );
};

export default LivingThings;

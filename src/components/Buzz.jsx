import React, { useState } from 'react';

const BuzzwordGenerator = () => {
  const [buzzword, setBuzzword] = useState('');

  const fetchBuzzword = async () => {
    try {
      const response = await fetch('https://corporatebs-generator.sameerkumar.website/');
      const data = await response.json();
      setBuzzword(data.phrase);
    } catch (error) {
      console.error('Error fetching buzzword:', error);
    }
  };

  return (
    <div>
      <button className='text-white' onClick={fetchBuzzword}>Generate Buzzword</button>
      {buzzword && <p>{buzzword}</p>}
    </div>
  );
};

export default BuzzwordGenerator;
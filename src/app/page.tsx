'use client';

import { useState } from 'react';
import { wordOptions } from './lib/data';

type WordOption = {
  text: string;
  value: string;
  image: string;
};

export default function Home() {
  const [selectedOption, setSelectedOption] = useState<WordOption | null>(null);

  const onChange: React.ComponentProps<'select'>['onChange'] = (e) => {
    const selectedValue = e.target.value;
    const option = wordOptions.find((opt) => opt.value === selectedValue) || null;
    setSelectedOption(option);
  };

  return (
    <main>
      <h1>Home</h1>

      <select onChange={onChange} value={selectedOption?.value || ''}>
        <option value="" disabled>
          Select an option
        </option>
        {wordOptions.map((option, index) => (
          <option key={index} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>

      <p>Selected Option: {selectedOption?.value}</p>
      <p>Image: {selectedOption?.image}</p>
    </main>
  );
}

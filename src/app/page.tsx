'use client';

import { useState } from 'react';

export default function Home() {
  const [selectOption, setSelectOption] = useState('');

  const onChange: React.ComponentProps<'select'>['onChange'] = (e) => {
    setSelectOption(e.target.value);
  };

  return (
    <main>
      <h1>Home</h1>
      <select onChange={onChange} value={selectOption}>
        <option value="1">rumah</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>

      <p>Selected Option: {selectOption}</p>
    </main>
  );
}

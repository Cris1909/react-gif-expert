import React, { useState } from 'react';

import { AddCategory, GifGrid } from './components';

const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) =>
    !categories.includes(newCategory) &&
    setCategories([newCategory, ...categories]);

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory} />
      {categories.map((category, i) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;

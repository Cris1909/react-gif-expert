import React, { useState } from 'react';

const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) =>  setInputValue(e.target.value);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const newInputValue = inputValue.trim();
    
    if (newInputValue.length <= 1) return;
    onNewCategory(newInputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

export default AddCategory;

import React, { useState } from "react";

const AddItem = ({ addItem }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Don't add to the to do list if no text has been entered
    if (!value) {
      return;
    }
    addItem(value);
    // Reset the input field to show the placeholder again
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new item"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </form>
  );
};

export default AddItem;

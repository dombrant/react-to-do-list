import React from "react";

const Header = ({ listLength }) => {
  return (
    <div className="header-container">
      <h1> To-Do List </h1>
      <p> Hello, you have items {listLength} due </p>
    </div>
  );
};

export default Header;

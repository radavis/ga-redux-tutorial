import React from "react";

const Input = ({ onInputChange, onFormSubmit, value }) => (
  <form onSubmit={onFormSubmit}>
    <div className="form-group">
      <label htmlFor="todoInput">To do:</label>
      <input
        type="text"
        className="form-control"
        id="todoInput"
        placeholder="Add new todo"
        value={value}
        onChange={onInputChange}
      />
      <button className="btn btn-primary">Add Item</button>
    </div>
  </form>
);

export default Input;

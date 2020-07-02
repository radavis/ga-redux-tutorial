import React from "react"

const Input = ({ handleInputChange, handleFormSubmit, value }) => (
  <form onSubmit={handleFormSubmit}>
    <div
      className="form-group">
      <label
        htmlFor="listInput">
        Email address
      </label>
      <input
        type="text"
        className="form-control"
        id="listItemInput"
        placeholder="Add new todo"
        value={value}
        onChange={handleInputChange}
      />
      <button
        className="btn btn-primary">
        Add Item
      </button>
    </div>
  </form>
)

export default Input

import React from "react"

const Input = ({ handleChange, handleSubmit, value }) => (
  <form onSubmit={handleSubmit}>
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
        onChange={handleChange}
      />
      <button
        className="btn btn-primary">
        Add Item
      </button>
    </div>
  </form>
)

export default Input

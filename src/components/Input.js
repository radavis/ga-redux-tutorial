import React from "react"

const Input = ({ onChange, onSubmit, value }) => (
  <form onSubmit={onSubmit}>
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
        onChange={onChange}
      />
      <button
        className="btn btn-primary">
        Add Item
      </button>
    </div>
  </form>
)

export default Input

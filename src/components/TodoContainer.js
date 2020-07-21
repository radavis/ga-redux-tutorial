import { connect } from "react-redux";
import React, { useState } from "react";

import Input from "./Input";
import List from "./List";

import { addItem, deleteItem, toggleItem } from "../redux/modules/todoList";

// 'input' is controlled
// todoList is managed by redux

const TodoContainer = ({ addItem, deleteItem, todoList, toggleItem }) => {
  const [input, setInput] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    addItem({ content: input, done: false });
    setInput("");
  };

  return (
    <div className="row">
      <div className="col-md-10 col-md-offset-1">
        <div className="panel panel-default">
          <div className="panel-body">
            <h1>My To Do App</h1>
            <hr />
            <List
              onItemClick={(index) => toggleItem(index)}
              onItemDelete={(index) => deleteItem(index)}
              listItems={todoList}
            />
            <Input
              value={input}
              onInputChange={(e) => setInput(e.target.value)}
              onFormSubmit={handleFormSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todoList: state.todoList,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  deleteItem: (index) => dispatch(deleteItem(index)),
  toggleItem: (index) => dispatch(toggleItem(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);

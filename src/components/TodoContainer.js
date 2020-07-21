import { connect } from "react-redux";
import React, { useState } from "react";

import Input from "./Input";
import List from "./List";

const TodoContainer = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setList([...list, { content: input, done: false }]);
    setInput("");
  };

  const handleItemClick = (itemIndex) => {
    setList(
      list.map((el, i) => {
        if (i !== itemIndex) return el;
        return { ...el, done: !el.done };
      })
    );
  };

  const handleItemDelete = (itemIndex) => {
    setList(list.filter((el, i) => i !== itemIndex));
  };

  return (
    <div className="row">
      <div className="col-md-10 col-md-offset-1">
        <div className="panel panel-default">
          <div className="panel-body">
            <h1>My To Do App</h1>
            <hr />
            <List
              onItemClick={handleItemClick}
              onItemDelete={handleItemDelete}
              listItems={list}
            />
            <Input
              value={input}
              onInputChange={handleInputChange}
              onFormSubmit={handleFormSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todo: state.todo,
});

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);

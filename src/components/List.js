import React from "react";

const List = ({ onItemClick, onItemDelete, listItems }) => {
  const list = listItems.map((el, i) => (
    <li key={i}>
      <span
        onClick={() => onItemClick(i)}
        style={
          el.done
            ? { textDecoration: "line-through", fontSize: "20px" }
            : { textDecoration: "none", fontSize: "20px" }
        }
      >
        {el.content}
      </span>
      <button
        onClick={() => onItemDelete(i)}
        className="btn btn-danger pull-right"
      >
        x
      </button>
    </li>
  ));

  return (
    <div>
      <ul>{list}</ul>
    </div>
  );
};

export default List;

import React from "react"

const List = ({ listItems }) => (
  <div>
    <ul>
      { listItems.map((el, i) => <li key={i}><span>{el}</span></li>) }
    </ul>
  </div>
)

export default List;

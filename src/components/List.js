import React from "react"

const List = ({ handleClick, listItems }) => {
  const list = listItems.map((el, i) => (
    <li key={i}>
      <span
        onClick={() => handleClick(i)}
        style={
          el.done
          ? {textDecoration: 'line-through', fontSize: '20px'}
          : {textDecoration: 'none', fontSize: '20px'}
        }
      >
        {el.content}
      </span>
    </li>
  ))

  return (
    <div>
      <ul>
        { list }
      </ul>
    </div>
  )
}

export default List;

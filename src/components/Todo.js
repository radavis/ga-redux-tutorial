import React, { useState } from "react"

import Input from "./Input"
import List from "./List"

const Todo = () => {
  const [list, setList] = useState([])
  const [input, setInput] = useState('test')

  const handleInputChange = event => {
    setInput(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    setList([...list, { content: input, done: false }])
    setInput('')
  }

  const handleItemClick = (itemIndex) => {
    console.log(itemIndex)
    setList(list.map((el, i) => {
      if (i !== itemIndex) return el
      return { ...el, done: !el.done }
    }))
  }

  return (
    <div className="row">
      <div className="col-md-10 col-md-offset-1">
        <div className="panel panel-default">
          <div className="panel-body">
            <h1>My To Do App</h1>
            <hr/>
            <List handleClick={handleItemClick} listItems={list} />
            <Input
              value={input}
              handleChange={handleInputChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Todo

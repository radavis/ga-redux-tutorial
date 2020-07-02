import React, { useState } from "react"

import Input from "./Input"
import List from "./List"

const Todo = () => {
  const [list, setList] = useState(['thing1', 'thing2', 'thing3'])
  const [input, setInput] = useState('test')

  const handleInputChange = event => {
    setInput(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    setList([...list, input])
    setInput("")
  }

  return (
    <div className="row">
      <div className="col-md-10 col-md-offset-1">
        <div className="panel panel-default">
          <div className="panel-body">
            <h1>My To Do App</h1>
            <hr/>
            <List listItems={list} />
            <Input value={input} onChange={handleInputChange} onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Todo

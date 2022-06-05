import React, {useState} from 'react'
import './ToDo.css';
import ToDoItem from './ToDoItem';

export default function ToDo() {

  const [items, setItems] = useState('')
  const [todoList, setTodoList] = useState([])

  function inputChange(event){
    setItems(event.target.value)
  }

  function buttonSubmit(event){
    setTodoList((element) => ([
      ...element,
      items
    ]));
    setItems('');
    
  }
  
  function deleteItem(id){
    setTodoList((element) => ([
      // ...element,
      element.filter((item, index) => index !== id) 
    ]))
  }
  return (
    <div className="container-todo">
      <div className="heading-todo">
        <h1>To-Do List</h1>
      </div>

      <div className="form-todo">
        <input onChange={inputChange} type="text" placeholder="Add an item" value={items}/>
        <button onClick={buttonSubmit}>
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
          {todoList.map((item, index) => { return <ToDoItem key={index} id={index} text={item} onChecked={deleteItem} /> })}    
        </ul>

      </div>
    </div>
  )
}

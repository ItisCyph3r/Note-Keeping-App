import React from 'react'

export default function ToDoItem(props) {
  const {text, onChecked, id} = props;
  return (
    <li onClick={() => {onChecked(id)}}> {text} </li>
  )
}

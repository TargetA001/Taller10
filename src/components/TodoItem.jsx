import React from "react";

export function TodoItem({ todo, cambiarEstado }) {
  const { id, task, completed } = todo;
  const fnCambiarEstado = () =>{
    cambiarEstado(id)
  }
  const Style = {
    backgroundColor: completed ? "#76D7C4" : "#EC7063 "
  }
  return (
    <li className="list-group-item" style={Style}> 
      <input type="checkbox" className="form-checked-input me-2" onChange={fnCambiarEstado} checked={completed}/>
      {task}
    </li>
  );
}

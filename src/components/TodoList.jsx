import React, { Fragment, useRef, useState } from "react";
import { TodoItem } from "./TodoItem";
import uuid4 from "uuid4";
import "bootstrap/dist/css/bootstrap.min.css";

export function TodoList() {
  const [todos, setTodos] = useState([]);
  const taskRef = useRef();

  const addTask = () => {
    const tarea = taskRef.current.value.trim();
    if (tarea === "") return;

    taskRef.current.value = null;

    setTodos((prevTodos) => {
      const newTask = {
        id: uuid4(),
        task: tarea,
        completed: false,
      };
      return [...prevTodos, newTask];
    });
  };

  const BorrarTareasCompletadas = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const cambiarEstadoTarea = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const contadorTareas = () => {
    return todos.filter((todo) => !todo.completed).length;
  };

  const ResumenTareas = () => {
    const cant = contadorTareas();

    if (cant === 0) {
      return (
        <div className="alert alert-success mt-3">
          Felicidades, no tienes tareas pendientes.
        </div>
      );
    }

    if (cant === 1) {
      return (
        <div className="alert alert-info mt-3">
          Te queda solamente 1 tarea.
        </div>
      );
    }

    return (
      <div className="alert alert-warning mt-3">
        Te quedan {cant} tareas pendientes.
      </div>
    );
  };

  return (
    <Fragment>
      <h1>Lista de Tareas</h1>

      <div className="input-group my-4">
        <input
          className="form-control"
          placeholder="Ingrese una tarea"
          ref={taskRef}
        ></input>
        <button className="btn btn-success ms-2" onClick={addTask}>
          <i className="bi bi-plus-circle"></i> Agregar Tarea
        </button>
        <button className="btn btn-danger ms-2" onClick={BorrarTareasCompletadas}>
          <i className="bi bi-trash3"></i> Eliminar Tarea
        </button>
      </div>

      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            cambiarEstado={cambiarEstadoTarea}
          />
        ))}
      </ul>

      <ResumenTareas />
    </Fragment>
  );
}


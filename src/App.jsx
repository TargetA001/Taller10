import React, { Fragment } from "react";

/* Importar TodoList */
import { TodoList } from "./components/TodoList";

/* Exportar App */
export function App() {
  return (
    <Fragment>
      <TodoList />
    </Fragment>
  );
}

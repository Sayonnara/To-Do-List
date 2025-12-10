import { useState } from "react";
import Todo from "./components/Todo.jsx";
import ToForm from "./components/ToForm.jsx";
import Search from "./components/search.jsx";
import Filter from "./components/filter.jsx";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Ir ao supermercado",
      category: "Pessoal",
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const addTodo = (text, category) => {
    const newTodo = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodo);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>

      {/* 🔍 Barra de busca */}
      <Search search={search} setSearch={setSearch} />

      {/* 🟦 Filtros */}
      <Filter
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
      />

      {/* 📝 Lista de Tarefas */}
      <div className="todo-list">
        {todos
          // Filtro por status
          .filter((todo) =>
            filter === "All"
              ? true
              : filter === "Completed"
              ? todo.isCompleted
              : !todo.isCompleted
          )

          // Filtro por texto digitado
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )

          // Ordenação
          .sort((a, b) =>
            sort === "Asc"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
          )

          // Renderização das tarefas
          .map((tarefa) => (
            <Todo
              key={tarefa.id}
              todo={tarefa}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))}

        {/* ➕ Form de nova tarefa */}
        <ToForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;

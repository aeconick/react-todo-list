import { useEffect, useState } from 'react';

import Loading from "./Components/Loading";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import TodoList from "./Components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3030/jsonstore/todos')
      .then(res => res.json())
      .then(data => {
        setTodos(Object.values(data));
        setIsLoading(false);
      })
  }, []);

  const onTodoAdd = () => {
    const lastId = Number((todos[todos.length - 1]._id).replace('todo_', ''));
    const text = prompt('Task name:');
    const newTask = { _id: 'todo_' + (lastId + 1), text, isCompleted: false };
    setTodos(state => [newTask, ...state])
  }

  const toggleTodoStatus = (id) => {
    setTodos(state => state.map(t => t._id === id ? ({ ...t, isCompleted: !t.isCompleted }) : t));
  };

  return (
    <div>
      <Header />
      <main className="main">
        {/* Section container */}
        <section className="todo-list-container">
          <h1>Todo List</h1>
          <div className="add-btn-container">
            <button className="btn" onClick={onTodoAdd}>+ Add new Todo</button>
          </div>
          <div className="table-wrapper">
            {isLoading
              ? <Loading />
              : <TodoList todos={todos} toggleTodoStatus={toggleTodoStatus} />
            }
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

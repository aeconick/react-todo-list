import Loading from "./Components/Loading";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Todos from "./Components/Todos";

function App() {
  return (
    <div>
      {/* Navigation header */}

      <Header />

      {/* Main content */}
      <main className="main">
        {/* Section container */}
        <section className="todo-list-container">
          <h1>Todo List</h1>
          <div className="add-btn-container">
            <button className="btn">+ Add new Todo</button>
          </div>
          <div className="table-wrapper">
            {/* Loading spinner - show the load spinner when fetching the data from the server*/}

            {/* <Loading /> */}

            {/* Todo list table */}
            <Todos />
          </div>
        </section>
      </main>
      {/* Footer */}

      <Footer />

    </div>
  );
}

export default App;

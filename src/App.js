import './App.css';
import Todo from './components/todo';

function App() {
  const todos = [
      { id: 1, title: 'wash dishes', completed: false },
      { id: 2, title: 'make dinner', completed: true },
  ];

    return (
        <div className='App'>
            <header className='App-header'>
                <p>Test</p>
                {todos.map((todo) => {
                    return <Todo todo={todo} />;
                })}
            </header>
        </div>
    );
}

export default App;

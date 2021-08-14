import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Todos from './components/Todos';
import CounterContainer from './Container/CounterContainer';
import TodosContainer from './Container/TodosContainer';

function App() {
  return (
    <div className="App">
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
}

export default App;

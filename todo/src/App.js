import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';


const App = () => {

  const [state, setstate] = useState([]);

  const submitTodoHandler = (value) => {

    if(!value.trim().length) return;

    const id = state.length + 1;
    const obj = {
      id: id,
      label: value
    }
    setstate(prevState => [obj, ...prevState]);
  }

  return (
    <div className="App">
        <AddTodo onSubmit={submitTodoHandler} />
        <Todos todos={state}/>
    </div>
  );
}

export default App;

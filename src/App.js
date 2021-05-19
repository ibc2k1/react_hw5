import logo from './logo.svg';
import './App.css';
import List from './todoList.js';


function App() {
  return (
    <div className="App">
        <div>{ List() }</div>
    </div>
  );
}

export default App;

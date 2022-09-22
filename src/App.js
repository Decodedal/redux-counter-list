
import './App.css';
import Counter from './counter';
import Todo from './todo';

function App() {
  return (
<div>
  <Counter/>
  <h2>Make a Todo list.</h2><br/>
  <p>Click an item on the list to remove it.</p>
  <Todo/>
</div>
  );
}

export default App;

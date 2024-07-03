import Task1 from './components/Task1/Task1';
import './App.css';
import Task2 from './components/Task2/Task2';
import Task3 from './components/Task3/Task3';

function App() {
  const label = 'qwert. asdfg. zxvb. poiuy.'

  return (
    <div className="App">
      <Task1/>
      <Task2 label={label}/>
      <Task3/>
    </div>
  );
}

export default App;

import {useState} from 'react';
import Header from './components/Header';
import Counter from './components/Counter';


function App() {

  const [count, setCount] = useState(0)



  return (
    <div className="App">
      <Header />
      <Counter
        count={count}
        setCount={setCount}
      />



    </div>
  );
}

export default App;

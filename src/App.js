import { useEffect, useState } from 'react';
import './App.css';
function App() {

  const [name, setName] = useState("Demo")
  return (
    <div className="App">
      {name}
    </div>
  );
}

export default App;

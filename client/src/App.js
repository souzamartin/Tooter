import {useState} from 'react';
import Login from './components/Login'

function App() {
  const [user, setUser] = useState({})

  return (
    <div className="App">
      <Login setUser={setUser} />
    </div>
  );
}

export default App;

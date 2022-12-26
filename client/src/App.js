import {useState} from 'react';
import Login from './components/Login'
import Header from './components/Header'

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <Header user={user} setUser={setUser} />
      {!user ? <Login setUser={setUser} /> : <div>Welcome!</div>}
    </div>
  );
}

export default App;

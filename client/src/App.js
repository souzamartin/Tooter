import {useState, useEffect} from 'react';
import Login from './components/Login'
import Header from './components/Header'
import TootContainer from './components/TootContainer';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/me')
    .then(r => {
      if (r.ok) {
        r.json()
        .then(setUser)
      }
    })
  }, [])

  return (
    <div className="App">
      <Header user={user} setUser={setUser} />
      {!user ? <Login setUser={setUser} /> : <TootContainer />}
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import TootContainer from "./components/TootContainer";
import Signup from "./components/Signup";
import Profile from "./components/Profile";

function App() {
  const history = useHistory();

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then(setUser)
      }
    })
  }, [])

  return (
    <div className="App">
      <Header user={user} setUser={setUser} />
      <Switch>
        <Route path="/signup">
          <Signup setUser={setUser} />
        </Route>

        <Route path="/profile">
          {!user ? <Login setUser={setUser} /> : <Profile user={user} setUser={setUser} />}
        </Route>

        <Route exact path="/">
          {!user ? <Login setUser={setUser} /> : <TootContainer user={user} />}
        </Route>
      </Switch>
    </div>
  )
}

export default App

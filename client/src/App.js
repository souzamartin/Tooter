import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import TootContainer from "./components/TootContainer";
import Signup from "./components/Signup";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then(setUser);
      }
    });
  }, []);

  return (
    <div className="App">
      <Header user={user} setUser={setUser} />
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>

        <Route exact path="/">
          {!user ? <Login setUser={setUser} /> : <TootContainer />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;

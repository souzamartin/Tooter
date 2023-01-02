import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import TootContainer from "./components/TootContainer";
import Profile from "./components/Profile";
import About from "./components/About";
import Title from "./components/Title";

function App() {
  const [user, setUser] = useState(null);
  const [tagSearchDisplay, setTagSearchDisplay] = useState(false);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then(setUser);
      }
    });
  }, []);

  return (
    <div className="App">
      {!user ? <Title /> : null}
      {user ? (
        <Header
          user={user}
          setUser={setUser}
          setTagSearchDisplay={setTagSearchDisplay}
          tagSearchDisplay={tagSearchDisplay}
        />
      ) : null}
      <Switch>
        <Route path="/profile">
          {!user ? (
            <Login setUser={setUser} />
          ) : (
            <Profile user={user} setUser={setUser} />
          )}
        </Route>

        {user ? (
          <Route path="/about">
            <About />
          </Route>
        ) : null}

        <Route exact path="/">
          {!user ? (
            <Login setUser={setUser} />
          ) : (
            <TootContainer user={user} tagSearchDisplay={tagSearchDisplay} />
          )}
        </Route>
      </Switch>
    </div>
  );
}

export default App;

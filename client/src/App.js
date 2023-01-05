import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import TootContainer from "./components/TootContainer";
import Profile from "./components/Profile";
import Title from "./components/Title";
import NewToot from "./components/NewToot";
import NewTag from "./components/NewTag";

function App() {
  const [user, setUser] = useState(null);
  const [tagSearchDisplay, setTagSearchDisplay] = useState(false);
  const [latestToot, setLatestToot] = useState(null)

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then(setUser);
      }
    });
  }, []);

  return (
    <div className="App">
      <Title />
      {!user ?
        <Login setUser={setUser} />
        :
        <>
          <Header
            user={user}
            setUser={setUser}
            setTagSearchDisplay={setTagSearchDisplay}
            tagSearchDisplay={tagSearchDisplay}
          />
          <Switch>
            <Route path="/newtoot">
                <NewToot setLatestToot={setLatestToot} />
            </Route>

            <Route path="/add-tags">
                <NewTag latestToot={latestToot} />
            </Route>

            <Route path="/profile">
                <Profile user={user} setUser={setUser} />
            </Route>

            <Route exact path="/">
                <TootContainer user={user} tagSearchDisplay={tagSearchDisplay} />
            </Route>
          </Switch>
        </>
      }
    </div>
  );
}

export default App;

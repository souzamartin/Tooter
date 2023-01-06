import Toot from "./Toot";
import { useEffect, useState } from "react";

const TootContainer = ({ user, tagSearchDisplay, setOnFeed }) => {
  const [toots, setToots] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [viewUser, setViewUser] = useState("");

  useEffect(() => {
    setOnFeed(true);
  }, []);

  const getToots = () => {
    fetch("/toots")
      .then((r) => r.json())
      .then(setToots);
  };

  useEffect(() => {
    getToots();
    setViewUser("");
  }, []);

  const deleteToot = (tootId) => {
    fetch(`/toots/${tootId}`, { method: "DELETE" }).then(getToots);
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const filteredToots = toots.filter((toot) =>
    toot.tag_labels.toString().toLowerCase().includes(searchText.toLowerCase())
  );

  const viewUsersToots = filteredToots.filter((toot) =>
    toot.user.username.includes(viewUser)
  );

  const renderedToots = viewUsersToots.map((toot) => {
    return (
      <Toot
        key={toot.id}
        toot={toot}
        user={user}
        deleteToot={deleteToot}
        setViewUser={setViewUser}
      />
    );
  });

  return (
    <div id="toot-container">
      {tagSearchDisplay ? (
        <input
          id="tag-search"
          type="text"
          placeholder="Search tags..."
          style={{ animation: " hoverShake 0.15s linear 3" }}
          value={searchText}
          onChange={handleChange}
        />
      ) : null}

      {viewUser !== "" ? (
        <button className="fancy-button" onClick={() => setViewUser("")}>
          Show All Toots
        </button>
      ) : null}

      <div>{renderedToots}</div>
    </div>
  );
};

export default TootContainer;

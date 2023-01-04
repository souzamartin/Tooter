import Toot from "./Toot";
import { useEffect, useState } from "react";

const TootContainer = ({ user, tagSearchDisplay }) => {
  const [toots, setToots] = useState([]);
  const [searchText, setSearchText] = useState("");

  const getToots = () => {
    fetch("/toots")
      .then(r => r.json())
      .then(setToots);
  };

  useEffect(() => {
    getToots();
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

  const renderedToots = filteredToots.map((toot) => {
    return (
      <Toot key={toot.id} toot={toot} user={user} deleteToot={deleteToot} />
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

      <div>{renderedToots}</div>
    </div>
  );
};

export default TootContainer;

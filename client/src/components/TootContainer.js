import Toot from "./Toot";
import { useEffect, useState } from "react";

const TootContainer = ({ user }) => {
  const [toots, setToots] = useState([]);

  const getToots = () => {
    fetch("/toots")
      .then((r) => r.json())
      .then(setToots);
  };

  useEffect(() => {
    getToots();
  }, []);
  const deleteToot = (tootId) => {
    fetch(`/toots/${tootId}`, { method: "DELETE" }).then(getToots);
  };
  const renderedToots = toots.map((toot) => {
    return (
      <Toot key={toot.id} toot={toot} user={user} deleteToot={deleteToot} />
    );
  });

  return <div id="toot-container">{renderedToots}</div>;
};

export default TootContainer;

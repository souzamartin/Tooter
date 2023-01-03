import { useState } from "react";
import { useHistory } from "react-router-dom";

const NewToot = ({setLatestToot}) => {
  const history = useHistory();
  const [newToot, setNewToot] = useState({
    content: "",
    likes: 0
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/toots", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newToot),
    })
    .then(r => r.json())
    .then(setLatestToot)
    history.push("/add-tags");
  };

  const handleChange = (e) => {
    setNewToot({
      ...newToot,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div id="new-toot">
      <form onSubmit={handleSubmit}>
        <textarea
          name="content"
          placeholder="Write a toot..."
          value={newToot.content}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default NewToot;

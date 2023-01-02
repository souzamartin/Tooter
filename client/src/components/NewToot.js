import { useState } from "react";
import { useHistory } from "react-router-dom";

const NewToot = () => {
  const history = useHistory();
  const [newToot, setNewToot] = useState({
    content: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/toots", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newToot),
    });
    history.push("/");
  };

  const handleChange = (e) => {
    setNewToot({
      ...newToot,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          name="content"
          placeholder="Write a toot..."
          value={newToot.content}
          onChange={handleChange}
        ></textarea>
        <input type="submit" />
      </form>
    </div>
  );
};

export default NewToot;

import { useState } from "react";
import { useHistory } from "react-router-dom";

const NewToot = ({setLatestToot}) => {
  const history = useHistory();

  const [errors, setErrors] = useState(null)

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
    .then(r => {
      if (r.ok) {
        r.json().then(setLatestToot)
        history.push("/add-tags")
      } else {
        r.json().then(setErrors)
      }
    })
  }

  const handleChange = (e) => {
    setNewToot({
      ...newToot,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>

      {errors ?
        <div className="error-box">
          <p className="error-list">
            {errors.errors.map((e, index) => <li key={index}>{e}</li>)}
          </p>
        </div>
      : null}

      <form id="new-toot" onSubmit={handleSubmit}>
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

import { useState } from "react";

const NewTag = () => {
  const [newTag, setNewTag] = useState({
    tag_text: "",
  });

  const handleChange = (e) => {
    setNewTag({
      ...newTag,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/tags", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTag),
    })
        .then(r => r.json())
      // put it in state
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="tag_text"
          placeholder="Create a new tag"
          value={newTag.tag_text}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default NewTag;

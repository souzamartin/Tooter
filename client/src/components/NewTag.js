import { useState } from "react";

const NewTag = () => {
  const [newTag, setNewTag] = useState("")
  const [tags, setTags] = useState([])

  const handleChange = (e) => {
    setNewTag(e.target.value)
  };

  const handleAddTag = (e) => {
    e.preventDefault()
    setTags([...tags, newTag])
    setNewTag("")
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/tags", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tags),
    })
        .then(r => r.json())
        .then(console.log)
        setTags([])
      // put it in state
  };

  return (
    <div>
      <form onSubmit={handleAddTag}>
        <input
          type="text"
          name="newTag"
          placeholder="Add a tag..."
          value={newTag}
          onChange={handleChange}
        />
        <input type="submit" value="Add Tag" />
      </form>

      <form onSubmit={handleSubmit}>
        <p id="taglist">{tags.map(tag => <span key={tag}>#{tag} </span>)}</p>
        <input type="submit" />
      </form>
    </div>
  );
};

export default NewTag;

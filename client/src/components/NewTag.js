import { useState } from "react";
import { useHistory } from "react-router-dom";

const NewTag = ({latestToot}) => {
  const history = useHistory()

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
        .then(applyTags)
        setTags([])
  };

  const applyTags = (addedTags) => {
    fetch("/toot_tags", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(
        {tags: addedTags, toot_id: latestToot.id}
      )
    })
    history.push('/')
  }

  return (
    <div>
      <form onSubmit={handleAddTag}>
        <input
          id="new-tag-field"
          type="text"
          name="newTag"
          placeholder="Add a tag..."
          value={newTag}
          onChange={handleChange}
        />
        <input className="fancy-button" type="submit" value="Add Tag" />
      </form>

      <form onSubmit={handleSubmit}>
        <p id="taglist">{tags.map(tag => <span key={tag}>#{tag} </span>)}</p>
        <input className="fancy-button" type="submit" />
      </form>
    </div>
  );
};

export default NewTag;

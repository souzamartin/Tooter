import { useState } from "react";

const Toot = ({ toot, user, deleteToot }) => {
  const [likes, setLikes] = useState(toot.likes);

  const handleDelete = () => {
    deleteToot(toot.id);
  };

  const renderedTags = toot.tag_labels.map((tag, index) => {
    return (
      <span key={index} className="tag">
        #{tag}
      </span>
    );
  });

  const timestamp = new Date(toot.created_at);

  const handleLike = () => {
    fetch(`/toots/${toot.id}/like`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((data) => {
        setLikes(data.likes);
      });
  };

  return (
    <div className="toot-card">
      <h3>{toot.user.username}</h3>
      <p>{toot.content}</p>
      <div className="tag-list">{renderedTags}</div>
      <p onClick={handleLike}>💕 {likes}</p>
      {user.id === toot.user.id ? (
        <button onClick={handleDelete}>❌</button>
      ) : null}
      <span className="timestamp">
        {timestamp.toLocaleString("en-us", { timeZone: "EST" })}
      </span>
    </div>
  );
};

export default Toot;

import { useState } from "react";

const Toot = ({ toot, user, deleteToot, setViewUser }) => {
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
      <h3
        className="toot-username"
        onClick={() => setViewUser(toot.user.username)}
      >
        {toot.user.username}
      </h3>
      <div className="bubble bubble-bottom-left">{toot.content}</div>
      <div className="toot-tags">{renderedTags}</div>
      <div className="toot-buttons">
        <span className="like-toot" onClick={handleLike}>
          💕 {likes}
        </span>
        {user.id === toot.user.id ? (
          <button className="delete-toot" onClick={handleDelete}>
            ❌
          </button>
        ) : null}
      </div>
      <span className="timestamp">
        {timestamp.toLocaleString("en-us", { timeZone: "EST" })}
      </span>
    </div>
  );
};

export default Toot;

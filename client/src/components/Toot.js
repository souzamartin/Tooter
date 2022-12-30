const Toot = ({toot, user, deleteToot}) => {

  const handleDelete = () => {
    deleteToot(toot.id);
  };

  const renderedTags = toot.tag_labels.map((tag, index) => {return <span key={index} className="tag">{tag}</span>})

  const timestamp = new Date(toot.created_at)

  return (
    <div id="toot-card">
      <h3>{toot.user.username}</h3>
      <p>{toot.content}</p>
      {renderedTags}
      <p>💕 {toot.likes}</p>
      {user.id === toot.user.id ? (
        <button onClick={handleDelete}>❌</button>
      ) : null}
      <span className="timestamp">{timestamp.toLocaleString('en-us', {timeZone: 'EST'})}</span>
    </div>
  );
};

export default Toot;

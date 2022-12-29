const Toot = ({ toot, user, deleteToot }) => {
  const handleDelete = () => {
    deleteToot(toot.id);
  };

  return (
    <div>
      <h3>{toot.user.username}</h3>
      <p>{toot.content}</p>
      {/* //<span>Tags will go here</span> */}
      <p>{toot.likes}</p>
      {user.id === toot.user.id ? (
        <button onClick={handleDelete}>❌</button>
      ) : null}
    </div>
  );
};

export default Toot;

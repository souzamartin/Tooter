const Signup = () => {
  return (
    <form id="signup-form">
      <input type="text" name="username" placeholder="Enter Username" />
      <input type="text" name="email" placeholder="Enter email" />
      <input type="text" name="password" placeholder="Enter Password" />
      <input
        type="text"
        name="password_confirmation"
        placeholder="Confirm password"
      />
      <input type="text" name="avatar_img" placeholder="Avatar" />
      <input type="submit" value="Create account" />
    </form>
  );
};

export default Signup;

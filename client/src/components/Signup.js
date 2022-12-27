import { useState } from "react";

const Signup = ({ handleSignup }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
    avatar_img: "",
  });

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup(formData);
  };
  return (
    <form id="signup-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Enter Username"
        value={formData.username}
        onChange={handleInput}
      />
      <input
        type="text"
        name="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleInput}
      />
      <input
        type="text"
        name="password"
        placeholder="Enter Password"
        value={formData.password}
        onChange={handleInput}
      />
      <input
        type="text"
        name="password_confirmation"
        placeholder="Confirm password"
        value={formData.password_confirmation}
        onChange={handleInput}
      />
      <input
        type="text"
        name="avatar_img"
        placeholder="Avatar"
        value={formData.avatar_img}
        onChange={handleInput}
      />
      <input type="submit" value="Create account" />
    </form>
  );
};

export default Signup;

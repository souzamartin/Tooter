import {useState} from "react";
import {useHistory} from "react-router-dom";

const Signup = ({setUser}) => {
  const history = useHistory()

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

  const handleSignup = (e) => {
    e.preventDefault()
    fetch("/users", {
      method: "POST",
      headers: {"Content-Type": "application/json",},
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => {
        setUser(data);
        history.push("/");
      });
  };

  return (
    <form id="signup-form" onSubmit={handleSignup}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleInput}
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInput}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleInput}
      />
      <input
        type="password"
        name="password_confirmation"
        placeholder="Confirm Password"
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
      <input type="submit" value="Create Account" />
    </form>
  );
};

export default Signup;

import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Login = ({ setUser }) => {
  //sign up

  const history = useHistory();

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
    e.preventDefault();
    fetch("/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => {
        setUser(data);
        history.push("/");
      });
  };

  //Login
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleLoginInput = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    }).then((r) => {
      if (r.ok) {
        r.json().then(setUser);
      } else {
        console.error("OINK");
      }
    });
  };

  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div className="signup">
        <form onSubmit={handleSignup}>
          <label htmlFor="chk" aria-hidden="true">
            Sign up
          </label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required=""
            value={formData.username}
            onChange={handleInput}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            required=""
            value={formData.email}
            onChange={handleInput}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required=""
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
          <button type="submit">Sign up</button>
        </form>
      </div>

      <div className="login">
        <form onSubmit={handleSubmit}>
          <label htmlFor="chk" aria-hidden="true">
            Login
          </label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required=""
            value={loginData.username}
            onChange={handleLoginInput}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required=""
            value={loginData.password}
            onChange={handleLoginInput}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

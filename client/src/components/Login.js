import { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = ({ setUser }) => {
  const history = useHistory();

  const [signupErrors, setSignupErrors] = useState(null)
  const [loginErrors, setLoginErrors] = useState(null)

  // Signup
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
      .then(r => {
        if (r.ok) {
          r.json().then(setUser)
          history.push("/")
        } else {
          r.json().then(setSignupErrors)
        }
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
    })
    .then(r => {
      if (r.ok) {
        r.json().then(setUser);
      } else {
        r.json().then(setLoginErrors);
      }
    });
  };

  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div className="signup">
        <form onSubmit={handleSignup}>
          <label className="subtitle" htmlFor="chk" aria-hidden="true">
            Sign Up!
          </label>
          
          {signupErrors ?
            <div className="error-box">
              <p className="error-list">
                {signupErrors.errors.map((e, index) => <li key={index}>{e}</li>)}
              </p>
            </div>
          : null}

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
          <button type="submit">Create Account</button>
        </form>
      </div>

      <div className="login">
        <form onSubmit={handleSubmit}>
          <label htmlFor="chk" aria-hidden="true">
            Log In
          </label>

          {loginErrors ?
            <div className="error-box">
              <p className="error-list">
                <li>{loginErrors.error}</li>
              </p>
            </div>
          : null}
          
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
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

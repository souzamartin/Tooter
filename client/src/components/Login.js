import { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ setUser }) => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleInput = (e) => {
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
        <form>
          <label htmlFor="chk" aria-hidden="true">
            Sign up
          </label>
          <input type="text" name="txt" placeholder="User name" required="" />
          <input type="email" name="email" placeholder="Email" required="" />
          <input
            type="password"
            name="pswd"
            placeholder="Password"
            required=""
          />
          <button>Sign up</button>
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
            onChange={handleInput}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required=""
            value={loginData.password}
            onChange={handleInput}
          />
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

// <div>
//     <form id="login-form" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Username"
//         name="username"
//         value={loginData.username}
//         onChange={handleInput}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         name="password"
//         value={loginData.password}
//         onChange={handleInput}
//       />
//       <input type="submit" value="Log in" />
//     </form> 
//     <Link id="create_account" to="/signup">
//       Create an account
//     </Link>
//   </div>

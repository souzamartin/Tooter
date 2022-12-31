import { NavLink } from "react-router-dom";

const Header = ({ user, setUser, setTagSearchDisplay, tagSearchDisplay }) => {
  const handleLogout = () => {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) setUser(null);
    });
  };

  const handleSearch = () => {
    setTagSearchDisplay(!tagSearchDisplay);
  };

  return (
    <div id="header">
      <div className="navigation">
        <nav>
          <ul className="nav-type">
            <li>
              <NavLink className="active" to="/">
                Feed
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="active3">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" className="active2">
                Profile
              </NavLink>
            </li>
            <li>
              {user ? (
                <a
                  id="logout-button"
                  className="active1"
                  onClick={handleLogout}
                >
                  Logout
                </a>
              ) : null}
            </li>
            <div className="line"></div>
            <li>
              <a>
                <i className="fa fa-search" onClick={handleSearch}></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;

// <div id="header">
//     <h1 id="maintitle">🎺 Tooter</h1>
//     <NavLink to='/'>Feed</NavLink>
//     <NavLink to='/profile'>Profile</NavLink>
//
// </div>

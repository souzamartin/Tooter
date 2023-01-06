import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = ({
  user,
  setUser,
  setTagSearchDisplay,
  tagSearchDisplay,
  onFeed,
}) => {
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
              <NavLink className="active" to="/newtoot">
                Toot!
              </NavLink>
            </li>
            <li>
              <NavLink className="active" to="/">
                Feed
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
            <li>
              <a>
                {onFeed ? (
                  <i className="fa fa-search" onClick={handleSearch}></i>
                ) : null}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;

import {useState} from 'react';
import {useHistory} from 'react-router-dom';

const Profile = ({user, setUser}) => {
    const history = useHistory()

    const [formData, setFormData] = useState({
        username: user.username,
        email: user.email,
        password: "",
        password_confirmation: "",
        avatar_img: user.avatar_img,
      });
    
    const handleInput = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
    };

    const handleUpdate = (e) => {
        e.preventDefault()
        fetch(`/users/${user.id}`, {
          method: "PATCH",
          headers: {"Content-Type": "application/json",},
          body: JSON.stringify(formData),
        })
          .then((r) => r.json())
          .then((data) => {
            setUser(data);
            history.push("/");
          });
      };

    const handleDelete = () => {
        fetch(`/users/${user.id}`, {method: "DELETE"})
        .then(r => {
            if (r.ok) {
                setUser(null)
                history.push("/")
            } else {
                console.error("OINK")
            }
        })
    }

    return (
        <div>
            <form id="profile-form" onSubmit={handleUpdate}>
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
                    placeholder="Enter or Change Password"
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
                <input type="submit" value="Update Account" />
            </form>
            <button id="delete-account" onClick={handleDelete}>Delete Account</button>
        </div>
    )
}

export default Profile
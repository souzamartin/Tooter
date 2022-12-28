import {useState} from 'react';

const Profile = ({user}) => {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form id="profile-form" onSubmit={handleSubmit}>
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
                placeholder="Change Password"
                value={formData.password}
                onChange={handleInput}
            />
            <input
                type="password"
                name="password_confirmation"
                placeholder="Confirm New Password"
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
    )
}

export default Profile
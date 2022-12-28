const Form = () => {
    
    return (
        <form id="signup-form" onSubmit={handleSubmit}>
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
                type="text"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInput}
            />
            <input
                type="text"
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
            <input type="submit" />
            </form>
    )
}

export default Form
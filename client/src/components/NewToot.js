import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

const NewToot = ({ setLatestToot, setOnFeed }) => {
  useEffect(() => {setOnFeed(false)}, [])

  const history = useHistory()

  const [errors, setErrors] = useState(null)

  const [newToot, setNewToot] = useState({
    content: "",
    likes: 0,
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch("/toots", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newToot),
    }).then((r) => {
      if (r.ok) {
        r.json().then(setLatestToot)
        history.push("/add-tags")
      } else {
        r.json().then(setErrors)
      }
    })
  }

  const handleChange = (e) => {
    setNewToot({
      ...newToot,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div>
      <p className="sub-subtitle">Let's hear it!</p>

      {errors ? (
        <div className="error-box">
          <p className="error-list">
            {errors.errors.map((e, index) => (
              <li key={index}>{e}</li>
            ))}
          </p>
        </div>
      ) : null}

      <form id="new-toot" onSubmit={handleSubmit}>
        <textarea
          id="new-toot-textbox"
          rows="5"
          name="content"
          placeholder="Write a toot..."
          value={newToot.content}
          onChange={handleChange}
        />
        <input className="fancy-button" type="submit" />
      </form>
    </div>
  )
}

export default NewToot

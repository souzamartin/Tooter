import Toot from "./Toot";
import {useEffect, useState} from "react";

const TootContainer = ({user}) => {
  const [toots, setToots] = useState([])
  const [searchText, setSearchText] = useState("")

  const getToots = () => {
    fetch("/toots")
      .then((r) => r.json())
      .then(setToots);
  };

  useEffect(() => {
    getToots();
  }, []);
  const deleteToot = (tootId) => {
    fetch(`/toots/${tootId}`, { method: "DELETE" }).then(getToots);
  };
  
  const handleChange = (e) => {
    setSearchText(e.target.value)
  }

  // const filteredToots = toots.filter(toot => 
  //   toot.toot_tags.map(tag => (tag.tag_label).includes(searchText))
  // )

  // console.log(filteredToots)

  const renderedToots = toots.map(toot => {
    return (
      <Toot key={toot.id} toot={toot} user={user} deleteToot={deleteToot} />
    );
  });

  return (
    <div id="toot-container">
      <input
        id="tag-search"
        type="text"
        placeholder="Search tags..." 
        value={searchText}
        onChange={handleChange}
      />
      <div>{renderedToots}</div>
    </div>
  )
};

export default TootContainer;

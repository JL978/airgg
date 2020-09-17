import React from "react";

export default function Navbar() {
  return (
    <div className="navBar">
      <h1>Logo here</h1>

      <div className="searchBar">
      <input className= 'SearchInput no-outline' 
                        maxLength='80' 
                        autoCorrect='off' 
                        autoCapitalize='off' 
                        spellCheck='false'
                        autoFocus={true}
                        placeholder='Search for Artists, Songs, or Podcasts'
                        value={query}
                        onChange={e => setQuery(e.target.value)}/>
      </div>
    </div>
  );
}

import React from 'react'

const SearchBar = ({handleChange,searchText}) => {
    return (
        <>
        <div className="box">
        <input id="search-bar" 
             type="search"
             placeholder="Search your Superhero"
             required
            onChange={handleChange}
            value={searchText}
        />
       </div>
        
        </>
    )
}

export default SearchBar

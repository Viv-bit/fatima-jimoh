import React, { useState } from 'react';

function Search () {

    const [query, setQuery] = useState(" ")

    const handleChange = (event) => {
        setQuery(event.target.value)
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(query)
    }
    
    
    return (
        <div className="search">
            <form onSubmit={handleSubmit} className="searchForm">
                <input type="text" placeholder="Enter Query"className="searchInput" 
                onChange={handleChange} />
                <button className="searchBtn">Search</button>
            </form>

            <h2>{query}</h2>
        </div>
    )
}
export default Search
import React, { useState } from 'react';

function Search () {

    const a = {
        user : {
          id : 1, 
          name : {
            firstName : "James",
            lastName : "Ibori"
          },
          location : {
            city : "Ikoji",
            state : "Lagos",
            address : "One experensive house like that"
          }
        }
    };

    const [query, setQuery] = useState(" ");

    const [result, setResult] = useState(" ");

    const handleChange = (event) => {
        setQuery(event.target.value)
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setResult(pathGen(a,query));
    }

    const pathGen = (obj,query) =>{
        let response = 'no path found';
        Object.keys(obj).forEach((key)=>{
            console.log(key);
          if (typeof  obj[key] == 'object'){
            Object.keys(obj[key]).forEach((key2)=>{
                if(typeof  obj[key][key2] !== 'object'){
                    if(obj[key][key2] == query){
                        response =  `${Object.keys({obj}).join()}.${key}.${key2}`;
                      }
                }else{
                    Object.keys(obj[key][key2]).forEach((key3)=>{
                        if(obj[key][key2][key3] == query){
                            console.log(key3);
                            response =  `${Object.keys({obj}).join()}.${key}.${key2}.${key3}`;
                          }
                    })
                }
             
            })
          }else if(obj[key] == query){
            response = `${Object.keys({obj}).join()}.${key}`
          }
        })
        return response;
      }

    
    
    return (
        <div className="search">
            <form onSubmit={handleSubmit} className="searchForm">
                <input type="text" placeholder="Enter Query"className="searchInput" 
                onChange={handleChange} />
                <button className="searchBtn">Search</button>
            </form>

            <h2 className="result">{result}</h2>
        </div>
    )
}
export default Search
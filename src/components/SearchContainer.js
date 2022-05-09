import React, { useState } from "react";
import Search from "./Search";
import Results from './Results';
import axios from 'axios';

function SearchContainer() {
    console.log("hello there");

    const [query, setQuery] = useState('')
    const [response, setResponse] = useState(null)

    function handleChange(event) {
        event.preventDefault();
        setQuery(event.target.value)
        axios.get('http://api.giphy.com/v1/gifs/search', {
            params: {
                api_key: 'lWUvv26cHLgGk6bC3SBotuqU9dO2wq8i',
                q: query
            }
        })
        .then((res) => {
            console.log(`res is ${res.data.data}`)
            setResponse(res.data.data)
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        axios.get('http://api.giphy.com/v1/gifs/search', {
            params: {
                api_key: 'lWUvv26cHLgGk6bC3SBotuqU9dO2wq8i',
                q: query
            }
        })
        .then((res) => {
            console.log(`res is ${res.data.data}`)
            setResponse(res.data.data)
        })
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <h3>Search: </h3>
                <input name="search" value={query} onChange={handleChange}/>
                <button>Search</button>
            </form>
            {response ? response.map((result) => {
                return (
                    <section>
                        <div className="album py-5 bg-light">
                            <Results
                                result={result}
                                key={result.id}
                            />
                        </div>
                    </section>
                )
            }) : <Search />}
        </>
    )
}

export default SearchContainer;
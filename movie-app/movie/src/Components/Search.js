import React from 'react'
import '../MovieApp.css';

const Search = ({handleInput, search}) => {
    return (
        <section className='searchbox-wrap'>
            <input 
            type='text' 
            placeholder ='Search movie...' 
            className= 'searchbox'
            onChange ={handleInput}
            onKeyPress={search}
            />
        </section>
    )
}

export default Search

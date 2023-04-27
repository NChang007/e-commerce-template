'use client'
import React from 'react'
import '../styles/search.css'
import { RxMagnifyingGlass } from 'react-icons/rx'
const Search = () => {
  return (
    <div className="search-dropdown">
        <button
            id='search-btn'
            className="search-dropbtn"
        >
            <RxMagnifyingGlass/>
        </button>
        <div className="search-dropdown-content">
            <div className='search-bar'>
                <RxMagnifyingGlass className='search-icon'/>
                <input 
                    type="text" 
                    className='search-input'
                    placeholder='Search the entire site'
                />
            </div>
            <div className="search-results">
                Display results here...
            </div>
        </div>
    
    </div>
  )
}

export default Search
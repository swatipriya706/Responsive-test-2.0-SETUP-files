import React from 'react'
import '../css/Header.css'
import Searchable from './Searchable'
import SearchField from 'react-search-field'


const header =()=> {
    return (
        <div className='header-visibility'>
            <Searchable />
        </div>
    )
}

export default header

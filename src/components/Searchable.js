import React from 'react'
import '../css/Header.css'

const Searchable = () => {
    return (
        <div className="header-item-align">
            <div className='anchor-style'>
                <button className='anchor-style'></button>
            </div>
            <div className="search-space">
                <input 
                    type='text'
                />
                <button type='submit'><img src={require('../../icons/search_icon.svg')}/></button>
                
            </div>
            
        </div>
    )
}

export default Searchable

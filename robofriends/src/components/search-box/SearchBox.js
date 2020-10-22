import React from 'react';

const SearchBox = ({placeholder, onSearchChange}) => {

    return (
        <div className='pa2'>
            <input className='pa3 ba b--green bg-lightest-blue'                
                name='searchbox'
                type='search'
                placeholder={placeholder}
                onChange={onSearchChange} />
        </div>
    );
}

export default SearchBox;
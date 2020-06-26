import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className="pa2 ma4">
            <input 
                className="pa3 ba b--green bg-lightest-blue"
                type="search"
                value={searchfield}
                placeholder="Search robots..."
                onChange={searchChange}
                />
        </div>
    );
}

export default SearchBox;
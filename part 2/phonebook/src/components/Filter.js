import React from 'react'

const Filter = ({filter, handleFilterChange}) => {
    return (
        <form>
            <h3>Filter</h3>
            Show Entries Containing: <input value={filter} onChange={handleFilterChange} />
        </form>
    );
}

export default Filter
import React from 'react';

export default function BookSorter({sortByTitle, sortById}){
    return (<div>
                <button onClick={sortById}> posortuj po ID </button>
                <button onClick={sortByTitle}> posortuj po tytule </button>
            </div>
    )
}
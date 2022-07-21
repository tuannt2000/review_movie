import ReactPaginate from 'react-paginate';
import React, { useEffect, useState } from 'react';
import PeopleList from '~/pages/Admin/People/PeopleList';
import { REACT_APP_BASE_URL } from '~/constants/config';

function PaginatedItems({ itemsPerPage}) {
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [items, setItems] = useState([])
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        fetch(REACT_APP_BASE_URL + 'people')
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, items]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <PeopleList currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                
            />
        </>
    );
}

export default PaginatedItems;
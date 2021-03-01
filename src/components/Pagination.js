import React from 'react';
import PropTypes from 'prop-types'

const Pagination = ({ totalPages, setCurrentPage, currentPage }) => {
    const pageNumbers = []
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
    }

    const onClickHandler = (e, number) => {
        e.preventDefault()
        setCurrentPage(number)
    }

    const goPrevHandler = (e) => {
        e.preventDefault();
        const newCurrent = parseInt(currentPage) - 1; 
        if(newCurrent < 1)return;
        setCurrentPage(newCurrent)
    }

    const goNextHandler = (e) => {
        e.preventDefault()
        const newCurrent = parseInt(currentPage) + 1; 
        if(newCurrent > totalPages)return;
        setCurrentPage(newCurrent)
    }

    return (
        <nav>
            <ul className='pagination'>
                <button
                    disabled={currentPage === 1}
                    type='button'
                    className='btn btn-outline-primary mb-2 mr-2 ' 
                    onClick={goPrevHandler}>
                    &laquo; Anterior
                </button>
                {pageNumbers.map(number => (
                    <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
                        <a onClick={(e) => onClickHandler(e, number)} href='!#' className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
                <button
                    disabled={currentPage === totalPages}
                    type='button'
                    className='btn btn-outline-primary mb-2 ml-2'
                    onClick={goNextHandler}>
                    Siguiente &raquo;
                </button>
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    totalPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    setCurrentPage: PropTypes.func.isRequired 
}

export default Pagination;
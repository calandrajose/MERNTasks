import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Form from './components/Form'
import Images from './components/Images/Images'
import { toggleState } from './utility'
import Error from './components/Error'
import Pagination from './components/Pagination';

function App() {

  const [searchParam, setSearchParam] = useState('');
  const [result, setResult] = useState([]);
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const resultsPerPage = 30;
    const fetch = async () => {
      if (searchParam === '') return

      const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${encodeURIComponent(searchParam)}&per_page=${resultsPerPage}&page=${currentPage}`;
      const result = await axios.get(url);
      setResult(result.data.hits);
      setTotalPages(Math.ceil(result.data.totalHits / resultsPerPage))

      if (result.data.hits.length === 0) {
        toggleState(2000, setError)
      }

      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({ behavior: 'smooth' })
    }
    fetch()
  }, [searchParam, currentPage])


  return (
    <div className="container">
      <div className='jumbotron'>
        <p className='lead text-center'>Buscador de Imagenes</p>
        <Form
          setSearchParam={setSearchParam}
        />
        {error ? <Error message='No existen resultados para su busqueda' /> : null}
      </div>
      <div className='row justify-content-center'>
        <Images
          images={result}
        />
        {totalPages !== 0?
          <Pagination
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
          : null}

      </div>

    </div>
  );
}

export default App;

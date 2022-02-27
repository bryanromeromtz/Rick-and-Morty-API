

import React from 'react';
import { useEffect, useState } from "react";
import Characters from './characters';
import Pagination from "./pagination";


const FetchDataAPI = () => {

  const [characters, setCharacters] = useState([]);

  const [info, setInfo] = useState({});

  const initialUrl = "https://rickandmortyapi.com/api/character/";

  const fetchData = async (url) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCharacters(data.results);
        setInfo(data.info);
        console.log(data.info);
      })
      .catch(err => console.log(err));
  };

  const onNext = () => {
    fetchData(info.next);
  }

  const onPrevious = () => {
    fetchData(info.prev);
  }

  useEffect(() => {
    fetchData(initialUrl);
  }, []);


  return (
    <div className='container mt-5'>
      <Pagination
        prev={info.prev}
        next={info.next}
        onNext={onNext}
        onPrevious={onPrevious}
      />
      <Characters characters={characters} />
      <Pagination
        prev={info.prev}
        next={info.next}
        onNext={onNext}
        onPrevious={onPrevious}
      />
    </div>
  )
}

export default FetchDataAPI;
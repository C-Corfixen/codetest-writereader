import { useState, useEffect } from 'react';

import { fetchData } from '../api/data.service';

const useBookData = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    //Fake api call
    fetchData(url)
    .then((response) => {
      console.log(response);
      setData(response.data.books);
    })
    .catch((error) => {
      setError(error);
    });
  }, [url]);

  const changeData = (newData) => {
    console.log(newData);
    setData(newData);
  }

  return {
    data,
    error,
    changeData
  }
}

export default useBookData;
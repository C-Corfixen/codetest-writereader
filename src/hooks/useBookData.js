import { useState, useEffect } from 'react';

import { FetchData } from '../api/data.service';

const useBookData = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    //Fake api call
    FetchData(url)
    .then((response) => {
      console.log(response);
      setData(response.data.books);
    })
    .catch((error) => {
      setError(error);
    });
  }, [url]);

  return {
    data,
    error
  }
}

export default useBookData;
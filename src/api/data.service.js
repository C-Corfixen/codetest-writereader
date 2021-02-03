const defaultData = {
  "books": [
    {
      "title": "The Hobbit",
      "author": "J. J. R. Tolkien",
      "pages": 310
    },
    {
      "title": "Lord of the Rings - The Fellowship of the Ring",
      "author": "J. J. R. Tolkien",
      "pages": 423
    },
    {
      "title": "Lord of the Rings - The Two Towers",
      "author": "J. J. R. Tolkien",
      "pages": 352
    },
    {
      "title": "Lord of the Rings - Return of the King",
      "author": "J. J. R. Tolkien",
      "pages": 416
    }
  ]
};

const fetchData = (url) => {
  const dataUrl = url;
  return new Promise((resolve) => {
    const localStorageData = localStorage.getItem(dataUrl);
    if(localStorageData == null) {
      console.log('No saved data found');
      localStorage.setItem(dataUrl, JSON.stringify(defaultData));
      resolve({'data': defaultData});
    }
    else {
      console.log('Saved data found');
      resolve({'data': JSON.parse(localStorageData)})     
    }   
  });
}

const addData = (options) => {
  const dataUrl = options.url;
  const { title, author, pages } = options.data;

  return new Promise((resolve) => {
    const currentData = JSON.parse(localStorage.getItem(dataUrl));
    const mergedData = {'books': [...currentData.books, {title, author, pages}]};
    localStorage.setItem(dataUrl, JSON.stringify(mergedData));

    resolve('item added');
  }); 
}

export {
  fetchData,
  addData
}
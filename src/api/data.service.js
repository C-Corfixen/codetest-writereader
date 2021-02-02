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

const FetchData = (url) => {
  return new Promise((resolve) => {
    const localStorageData = localStorage.getItem(url);
    if(localStorageData == null) {
      console.log('No saved data found');
      localStorage.setItem(url, JSON.stringify(defaultData));
      resolve({'data': defaultData});
    }
    else {
      console.log('Saved data found');
      resolve({'data': JSON.parse(localStorageData)})     
    }   
  });
}

export {
  FetchData
}
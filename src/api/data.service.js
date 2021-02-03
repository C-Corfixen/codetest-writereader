const defaultData = {
  "books": [
    {
      "title": "The Hobbit",
      "author": "J. J. R. Tolkien",
      "pages": 310,
      "id": 1,
    },
    {
      "title": "Lord of the Rings - The Fellowship of the Ring",
      "author": "J. J. R. Tolkien",
      "pages": 423,
      "id": 2,
    },
    {
      "title": "Lord of the Rings - The Two Towers",
      "author": "J. J. R. Tolkien",
      "pages": 352,
      "id": 3,
    },
    {
      "title": "Lord of the Rings - Return of the King",
      "author": "J. J. R. Tolkien",
      "pages": 416,
      "id": 4,
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
    //Dirty fix for id, since we dont have a real api to handle it
    const id = Math.floor(Math.random() * 1000);
    const currentData = JSON.parse(localStorage.getItem(dataUrl));
    const mergedData = {'books': [...currentData.books, {title, author, pages, id}]};
    localStorage.setItem(dataUrl, JSON.stringify(mergedData));

    resolve('item added');
  }); 
}

export {
  fetchData,
  addData
}
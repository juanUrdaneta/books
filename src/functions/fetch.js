const getBooks = async searchQuery => {
  const APIKEY = 'USE YOUR GOOGLE BOOKS API KEY';
  
  const fe = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${APIKEY}`);
  const data = (fe.ok) ? await fe.json() : 'none';

  return data.items;
}

export default getBooks;  
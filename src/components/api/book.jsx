import React, { createContext, useState, useEffect } from 'react';
import { useCallback } from 'react';

// Create a context
export const MyContext = createContext();

const BookProvider = ({ children }) => {
  const [book, setBook] = useState([]);
  const [error, setError] = useState(null); // To handle errors
  const [searchTerm,setSearchterm]=useState('the lost world')
  const [resultTitle,setresultTitle]=useState('')

  const getBooks =useCallback( async () => {
//     const url = 'https://all-books-api.p.rapidapi.com/getBooks';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'c90a1f0280msh587440f2d4f24fcp12ce00jsn82b5bb9c37d9',
// 		'x-rapidapi-host': 'all-books-api.p.rapidapi.com'
// 	}
// };

const url='https://openlibrary.org/search.json?title='

    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json(); // Await the JSON parsing
      const {docs}=data
      setBook(docs);
    } catch (error) {
      console.error('Failed to fetch books:', error);
      setError(error.message); // Set the error message to the state
    }
  },[searchTerm]);

  useEffect(() => {
    getBooks();
  }, [searchTerm,getBooks]);

  return (
    <MyContext.Provider value={{book,error,setSearchterm,setresultTitle}}>
      {children}
    </MyContext.Provider>
  );
};

export default BookProvider;

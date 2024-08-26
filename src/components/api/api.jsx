import React, { createContext, useState, useEffect } from 'react';


// Create a context
export const MyContext = createContext();

const BookProvider = ({ children }) => {
  const [book, setBook] = useState([]);
  const [error, setError] = useState(null); // To handle errors
  const [searchTerm,setSearchterm]=useState('the lost world')
  const [resultTitle,setresultTitle]=useState('')
  const [Loading , setLoading]=useState(false)
  const [dataArray, Setdataarray]=useState([])

  const getBooks = async () => {

const url='https://openlibrary.org/search.json?title='


    try {
        setLoading(true)
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json(); // Await the JSON parsing
      const {docs}=data
    

      if(docs){
        const newBook=docs.slice(0,20).map((booksingle)=>{
            const { key, author_name,cover_i, edition_count, first_publish_year, title,number_of_pages_median}=booksingle
            return{
                id:key,
                author:author_name,
                cover_id:cover_i,
                edition_count,
                first_publish_year,
                title,
                page:number_of_pages_median
            }
        })
        // console.log(newBook)
        setBook(newBook)

        if(newBook.length> 1){
            setresultTitle('your search result')
        }
        else{
            setresultTitle('No book found')
        }
      }
      else{
          setBook([]);
        setresultTitle('No book found')
      }
      setLoading(false)
    } catch (error) {
      console.error('Failed to fetch books:', error);
      setError(error.message); // Set the error message to the state
    }
  };

  useEffect(() => {
    getBooks();
  }, [searchTerm]);

  const addData = (data) => {
    // Check if the dataArray already contains the data with the same id
    const exists = dataArray.some(item => item.id === data.id);
  
    // If it doesn't exist, add the new data to the array
    if (!exists) {
      console.log(data);
      Setdataarray([...dataArray, data]);
    }
  }
  

  return (
    <MyContext.Provider value={{book,error,setSearchterm,setresultTitle,Loading,addData,dataArray}}>
      {children}
    </MyContext.Provider>
  );
};

export default BookProvider;

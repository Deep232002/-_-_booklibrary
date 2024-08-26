import React, { useContext } from 'react';
import { MyContext } from '../api/api';
import style from './allbook.module.css'
import Catogery from './catogery';
import Bookstore from './bookstore';

export default function Allbook() {
  const {book,error,setSearchterm,setresultTitle,Loading } = useContext(MyContext); // Access book and error

  // Handle loading state, error state, and empty state
  if (error) {
    return <div>Error: {error}</div>;
  }

  

  return (
    <div>
      <div className={style.book_container}>
     <p className={style.heading}>My Collections</p>
     <div className={style.card_container}>
      <div className={style.book}>

    <Bookstore book={book} loading={Loading}/>
      </div>
      <div className={style.catogery}>

     <Catogery search={setSearchterm}/>
      </div>
</div>
    </div>
    </div>
  );
}

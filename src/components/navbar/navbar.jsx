import React, { useContext, useState } from 'react';
import style from './navbar.module.css';
import { FaBookBookmark } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
// import { IoIosHeart } from "react-icons/io";
import { GiBookshelf } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";
import { MyContext } from '../api/api';
import { Link } from 'react-router-dom';
// import image from '../../../public/images/borrow.png'

export default function Navbar() {
  const [input, setInput] = useState('');
  const { setSearchterm, setresultTitle } = useContext(MyContext);

  // Handle input change
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim().length === 0) {
      setresultTitle('Please write something...');
      setSearchterm('the lost world');
    } else {
      setresultTitle('Your search results:');
      setSearchterm(input);
    }
    setInput('')
  };

  return (
    <div>
      <div className={style.navbar}>
        <div className={style.logo}>
          <span>
            <FaBookBookmark className={style.logo_icon} /> My Book
          </span>
        </div>
        <div className={style.search_box}>
          <form className={style.input_box} onSubmit={handleSubmit}>
            <input
              name="search"
              placeholder="Search"
              type="text"
              value={input}
              onChange={handleChange}
              id={style.input}
            />
            <button type="submit" className={style.search_button}>
              <CiSearch className={`${style.icon} ${style.search}`} />
            </button>
          </form>
        </div>
        <div className={style.menu}>
          
          <Link to='/borrow'>
          <GiBookshelf className={style.icon} />
         
          </Link>
          <FaUserAlt className={style.icon} />
        </div>
      </div>
    </div>
  );
}

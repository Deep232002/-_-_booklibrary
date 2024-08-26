import React, { useContext } from 'react';
import style from './catogery.module.css';
import { MyContext } from '../api/api';


export default function Category() {
  const {setSearchterm}=useContext(MyContext)

    const handleClick = (category) => {
        console.log(category)
       setSearchterm(category)
    }

    return (
        <div>
            <div className={style.contain}>
                <ul>
                    <li>Category</li>
                    <li onClick={() => handleClick('Horror')}>Horror</li>
                    <li onClick={() => handleClick('Love Story')}>Love Story</li>
                    <li onClick={() => handleClick('Mystery')}>Mystery</li>
                    <li onClick={() => handleClick('Comedy')}>Comedy</li>
                </ul>
            </div>
        </div>
    );
}

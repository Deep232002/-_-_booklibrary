import React ,{useContext, useState} from 'react'
import style from './bookpage.module.css'

import Slider from '../slidder/slider'
export default function Bookpage() {
    

    
  return (
    <div className={style.box}>
      <div className={style.contain}>
        <div className={style.contant}>
            <span className={style.bold}>Book Collection</span>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium enim a doloremque exercitationem vel pariatur.</p>
            <span className={style.btn } role='button'>Show more</span>
        </div>
        <div className={style.image}>
          <Slider/>
        </div>
      </div>
    </div>
  )
}

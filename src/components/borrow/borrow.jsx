import React, { useContext } from "react";
import style from "./borrow.module.css";
import { MyContext } from "../api/api";

export default function Borrow() {
    const { dataArray, setdataarray } = useContext(MyContext);

  const handleclick=(data)=>{
    const mybook= dataArray.filter(book => book.id !== data.id);
    setdataarray(mybook)
  }


    return (
        <div className={style.card_container}>
            <h2>Borrow({dataArray.length} books)</h2>
            <div className={style.card_box}>
            {dataArray.map((image, index) => (
                <div className={style.card} key={index}>
                    <div className={style.image_box} >
                        <img
                            src={image.cover_id
                                ? `https://covers.openlibrary.org/b/id/${image.cover_id}-L.jpg`
                                : "https://storage.googleapis.com/du-prd/books/images/9781619634459.jpg"}
                            alt={image.title || 'Book cover'}
                            className={style.card_image}
                        />
                    </div>
                    <div className={style.card_content}>
                        <p className={style.card_title}>
                            {image.title.length > 11 ? `${image.title.slice(0, 10)}...` : image.title}
                        </p>
                        <button className={style.btn} onClick={()=>{handleclick(image)}}>
                            Return
                        </button>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}

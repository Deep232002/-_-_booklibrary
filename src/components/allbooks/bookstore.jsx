import React, { useContext, useState } from "react";
import style from "./bookstore.module.css";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../api/api";

export default function Bookstore(props) {
    const { book, loading } = props;
    const [btnStates, setBtnStates] = useState({}); // State to keep track of each button
    const history = useNavigate();
    const { addData } = useContext(MyContext);

    if (loading) {
        return (
            <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }

    const handleClick = (data) => {
        history('/singlebook', { state: { data } });
    };

    const handleButton = (id) => {
        setBtnStates((prevStates) => ({
            ...prevStates,
            [id]: prevStates[id] === 'Borrowed' ? 'Borrow' : 'Borrowed'
        }));
    };

    return (
        <div className={style.card_container}>
            {book.map((image) => (
                <div className={style.card} key={image.id}>
                    <div className={style.image_box} onClick={() => handleClick(image)}>
                        <img
                            src={image.cover_id ? `https://covers.openlibrary.org/b/id/${image.cover_id}-L.jpg` : "https://storage.googleapis.com/du-prd/books/images/9781619634459.jpg"}
                            alt=""
                            className={style.card_image}
                        />
                    </div>
                    <div className={style.card_contant}>
                        <p className={style.card_title}>{image.title.length > 11 ? image.title.slice(0, 10) + '...' : image.title}</p>
                        <button
                            className={btnStates[image.id] === 'Borrowed' ? style.a_btn : style.btn}
                            onClick={() => { addData(image); handleButton(image.id); }}
                        >
                            {btnStates[image.id] || 'Borrow'}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

import React, { useState, useEffect } from 'react';
import style from './singlebook.module.css';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function SingleBook() {
  const [singleData, setSingleData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("https://storage.googleapis.com/du-prd/books/images/9781619634459.jpg");
  const location = useLocation();
  const { data } = location.state || {};

  if (!data || !data.id) {
    return <div>No data available</div>;
  }

  const id = data.id.replace("/works/", "");
  const { author, edition_count, first_publish_year, title, cover_id, page } = data;

  const getData = async () => {
    setLoading(true);
    const url = `https://openlibrary.org/works/${id}.json`;
    try {
      const response = await fetch(url);
      const myData = await response.json();
      console.log(myData)
      setSingleData(myData);

      // Use cover_id from the fetched data if available
      if (cover_id) {
        setImage(`https://covers.openlibrary.org/b/id/${cover_id}-L.jpg`);
      }
    } catch (error) {
      console.log('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <div class="text-center">
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
  }

  return (
    <div>
      <div className={style.single_book}>
        <div className={style.image}>
          <img src={image} alt={title || 'Book cover'} />
          <button className={style.borrow}>Borrow</button>
        </div>
        <div className={style.content}>
          <div className={style.book_title}>{title}</div>
          <div className={style.name}>By <span className={style.name_bold}>{author}</span></div>
          {singleData?.description?.value && (
            <div className={style.des}>
              <span className={style.overview}>Summary:</span> {singleData.description.value}
            </div>
          )}
          <div className={style.based}>
            Novel based on {singleData?.subjects && singleData.subjects[0] ? singleData.subjects[0] : 'N/A'}
          </div>
          <div className={style.publish}>
            <div className={style.comman}><span>Publish year</span><span>{first_publish_year}</span></div>
            <div className={style.comman}><span>Edition</span><span>{edition_count}</span></div>
            <div className={style.comman}><span>Language</span><span>English</span></div>
            <div className={style.comman}><span>Pages</span><span>{page || 'N/A'}</span></div>
          </div>
          <Link to="/" className={style.link_tag}>
          <div className={style.btn}>
            Go Back
          </div>
            </Link>
        </div>
      </div>
    </div>
  );
}

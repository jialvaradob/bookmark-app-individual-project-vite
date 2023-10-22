
import { useState } from 'react';
import PropTypes from 'prop-types';
import { BsBookmark } from 'react-icons/bs';
//import { IoCalendarOutline } from 'react-icons/io5';

import './Book.css';

const Book = ({book}) => {
    console.log (book, 'this is the book info 1');
    const [read, setRead] = useState(false);
    //const [bookmark, setBookmark] = useState([]);

    const toggleRead = () => {
        setRead((prevRead) => !prevRead);
    };

    //console.log (book.title, book.formats['image/jpeg'], book.authors[0].name, 'this is the book info 2');

    return (
        <div className={`book-container ${read ? 'yes' : 'no'}`}>
            <div className="book-cover">
                <img
                    src={
                        book.formats['image/jpeg'] 
                            ? book.formats['image/jpeg']
                            : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/660px-No-Image-Placeholder.svg.png?20200912122019'
                    }
                    alt={book.title}
                />
            </div>
            <div className="book-details">
                <h2>{book.title}</h2>
                <p>{book.authors.name}</p>
                <div className="read-btn-container">
                    <button onClick={toggleRead} className="read-button">
                        <BsBookmark color={read ? 'red' : 'blue'} size={32} /> 
                    </button> 
                </div>
            </div>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.shape({
        title: PropTypes.string.isRequired,
        authors: PropTypes.array.isRequired,
        name: PropTypes.string.isRequired,
        formats: PropTypes.string.isRequired
    })
};

export default Book;

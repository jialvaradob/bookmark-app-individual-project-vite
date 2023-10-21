
import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaHeart } from 'react-icons/fa';
import { IoCalendarOutline } from 'react-icons/io5';

import './Book.css';

const Book = ({book}) => {
    console.log (book, 'this is the book info 1');
    const [read, setRead] = useState(false);

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
                            : 'no cover image'
                    }
                    alt={book.title}
                />
            </div>
            <div className="book-details">
                <h2>{book.title}</h2>
                <p>
                    <IoCalendarOutline color="white" /> {book.authors.name}
                </p>
                <div className="read-btn-container">
                    <button onClick={toggleRead} className="read-button">
                        <FaHeart color={read ? 'red' : 'white'} size={24} /> 
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
        formats: PropTypes.string.isRequired
    })
};

export default Book;

/*import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaHeart } from 'react-icons/fa';
import { IoCalendarOutline } from 'react-icons/io5';

import './book.css';

const ButtonPrev = ({ book }) => {
    const [read, setRead] = useState(false);

    const toggleRead = () => {
        setRead((prevRead) => !prevRead);
    };

    return (
        <div className={`book-container ${read ? 'yes' : 'no'}`}>
            <div className="book-cover">
                <img
                    src={
                        book.formats['image/jpeg'] === 'N/A'
                            ? 'no cover image'
                            : formats['image/jpeg']
                    }
                    alt={book.title}
                />
            </div>
            <div className="book-details">
                <h2>{book.title}</h2>
                <p>
                    <IoCalendarOutline color="white" /> {book.author[0].name}
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
        formats: PropTypes.object.isRequired
    })
};

export default Book;*/

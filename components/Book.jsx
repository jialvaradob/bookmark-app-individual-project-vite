
import { useState } from 'react';
import PropTypes from 'prop-types';
import { BsBookmark } from 'react-icons/bs';
//import { IoCalendarOutline } from 'react-icons/io5';

import './Book.css';

const Book = ({book}) => {

    const [read, setRead] = useState(false);
    const [bookmark, setBookmark] = useState([]);
    
    const toggleReadAndBookmark = () => {
        setRead((prevRead) => {
            const newReadState = !prevRead;
            if (newReadState) {
                // If the book is being marked as read, add it to favorites
                setBookmark([...bookmark, book]);
            } else {
                // If the book is being marked as unread, remove it from favorites
                setBookmark(bookmark.filter(bookmark => bookmark.id !== book.id));
            }
            console.log(toString(bookmark));
            return newReadState;
        });
    };

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
              {book.authors.map((author, id) => (
              <p key={id}>{author.name}</p>
                ))}
                <div className="read-btn-container">
                    <button onClick={toggleReadAndBookmark} className="read-button">
                        <BsBookmark color={read ? 'red' : 'blue'} size={32} /> 
                    </button> 
                
                </div>
            </div>
            {/* {bookmark.map((book, index) => (
    <Book key={index} book={book} />
))} */}
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.shape({
        title: PropTypes.string.isRequired,
        authors: PropTypes.array.isRequired,
        name: PropTypes.string.isRequired,
        formats: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }),
    onBookmark: PropTypes.func.isRequired,
    bookmarks: PropTypes.array.isRequired,
};

export default Book;

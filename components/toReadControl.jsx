import { useState } from 'react';
import PropTypes from 'prop-types';
import { BsBookmark } from 'react-icons/bs';

import './book.css';

const Book = ({book, onBookmark}) => {
    const [read, setRead] = useState(false);

    const toggleReadAndBookmark = () => {
        setRead((prevRead) => !prevRead);
        onBookmark(book);
    };

    return (
        <div className={`book-container ${read ? 'yes' : 'no'}`}>
            <div className="book-cover">
                <img
                    src={
                        book.formats['image/jpeg'] 
                            ? book.formats['image/jpeg']
                            : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/no-image-placeholder.svg/660px-no-image-placeholder.svg.png?20200912122019'
                    }
                    alt={book.title}
                />
            </div>
            <div className="book-details">
                <h2>{book.title}</h2>
                <p>{book.authors.name}</p>
                <div className="read-btn-container">
                    <button onClick={toggleReadAndBookmark} className="read-button">
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
    }),
    onBookmark: PropTypes.func.isRequired
};

export default Book;


import React, { useState } from 'react';

/* function FavoriteList() {
  // Initialize favorites with an empty array
  const [favorites, setFavorites] = useState([]);

  // Function to add a new item to the favorites
  const addFavorite = (item) => {
    setFavorites([...favorites, item]);
  };

  // Function to remove an item from the favorites
  const removeFavorite = (item) => {
    setFavorites(favorites.filter(favorite => favorite !== item));
  };

  return (
    <div>
      
      {favorites.map((item, index) => (
        <div key={index}>
          {item}
          <button onClick={() => removeFavorite(item)}>Remove</button>
        </div>
      ))}
      
      <button onClick={() => addFavorite('New Item')}>Add Favorite</button>
    </div>
  );
} */

// This last one is another integrated solution for the bookmark option inside books.


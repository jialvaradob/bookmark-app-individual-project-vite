import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import './ThumbnailsPage.css';

import Book from '/components/Book.jsx';
import Loading from '/components/Loading.jsx';

import SheetContext from './context/sheetContext';



const BookList = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const context = useContext(SheetContext);

      
        
    //const searchText = data.searchText;
console.log(context.pageOption, context.orderOption)
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(
                    `https://gutendex.com/books/?page=${context.pageOption}&sort=${context.orderOption}`
                );
                console.log(response.data.results, 'hello world');
                console.log(response)
                // maybe use response = books and take everything from there.
// Fetch the booklist from API
                if (response.status === 200) {
                    if (response.data.results) {
                        setError('');
                        setBooks(response.data.results);
                    } else {
                        setError(response.data.Error);
                    }
                } else {
                    throw new Error(
                        `Failed to fetch books : ${response.detail}`
                    );
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, [context.pageOption, context.orderOption]);
    // Everytime context variable changes then it is refreshed.
    

      return (
        <div className="book-library">
            {loading && <Loading />}
            {error && <p className="error">{error}</p>}
            {!error && books.map((book, id) => (
                <Book key={id} book={book} />
            ))}
           
        </div>
    );
            };

            
export default BookList;

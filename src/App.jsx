import {useState} from 'react';
import './App.css';
import Header from '../components/Header';
import DropdownList from '../components/DropdownList';
import ThumbnailsPage from '../components/ThumbnailsPage';
import ButtonsPrevNext from '../components/ButtonsPrevNext';
import SheetContext from '../components/context/sheetContext';


const App = () => {
    const [orderOption, setOrderText] = useState('0');
    const [pageOption, setPageOption] = useState(1);
    const [bookmarks, setBookmarks] = useState([]);

    const handleBookmark = (book) => {
        setBookmarks([...bookmarks, book]);
    };
// This changes the order of the books. orderOption is the Dropdownlist option and pageOption is the API by page.
    return (
        <div>
            <Header />
            <SheetContext.Provider
                value={{
                    orderOption: orderOption,
                    setOrderText: setOrderText,
                    pageOption: pageOption, 
                    setPageOption: setPageOption,
                    name: ''
                }}
            >
                <DropdownList />
                <ButtonsPrevNext/>
                <ThumbnailsPage onBookmark={handleBookmark}/>
            </SheetContext.Provider>
        </div>
    );
};
// The context takes the dropdown list order to show 

export default App;

// con
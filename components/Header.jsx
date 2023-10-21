import { useState } from 'react';
// Only to change the folder styled title
import './Header.css';

//import sheetContext from '../context/SheetContext';

const Header = () => {
    const folderTitle = useState('Library');
        
    return (
        <header className="header-container">
            <h1 className="header-main"> Brook&Books </h1>
            <h2 className="header-folder">{folderTitle.name}</h2>

        </header>
    );
};

export default Header;

/* 
    -Header container with a static main title for the site 
        (Not sure what properties should i add)
                   
    - Change of 'sheet' when changing between lists like old tagged paper folders (all  / read) {name}
*/
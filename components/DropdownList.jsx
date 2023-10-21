import {useContext} from 'react';
import SheetContext from './context/sheetContext'; 

const DropdownList = () => {
    //const [selectedValue, setSelectedValue] = useState('default');
    //const [sheetValue, SheetContext] = useContext('0'); let's use this context later
    const data = useContext(SheetContext);

    //while (data.orderOption === '1')
    
    
    // Change the array order



    return (
    <select value={data.orderOption} onChange={(e) => data.setOrderText(e.target.value)}>
        <option value="0" >Popularity</option>
        <option value="1">Popularity Desc</option>
    </select>
      
    );
};

export default DropdownList;

/* 
    -Header container with a static main title for the site 
        (Not sure what properties should i add)
                   
    - Change of 'sheet' when changing between lists like old tagged paper folders (all  / read) {name}
*/
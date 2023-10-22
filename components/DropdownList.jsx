import {useContext} from 'react';
import SheetContext from './context/sheetContext'; 

const DropdownList = () => {
    //const [selectedValue, setSelectedValue] = useState('default');
    //const [sheetValue, SheetContext] = useContext('0'); let's use this context later
    const data = useContext(SheetContext);

    // Change the array order



    return (
    <select value={data.orderOption} onChange={(e) => data.setOrderText(e.target.value)}>
        <option value="popular" >Popular</option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
    </select>
      
    );
};

export default DropdownList;

/* 
    -Header container with a static main title for the site 
        (Not sure what properties should i add)
                   
    - Change of 'sheet' when changing between lists like old tagged paper folders (all  / read) {name}
*/
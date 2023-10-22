import { useContext} from 'react';
import SheetContext from './context/sheetContext';
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from 'react-icons/bs';

import './ButtonsPrevNext.css';

const ButtonsPrevNext = () => {
    const data = useContext(SheetContext);
   
    function nextPage() {
      data.setPageOption(data.pageOption + 1)  
    }

    function prevPage() {
      if (data.pageOption > 1){
        data.setPageOption(data.pageOption - 1) 
      }
    }
  
console.log(data.pageOption);
    return (
        
    <div className= 'buttonDiv'>
        <button className='btn-next' 
        value={data.pageOption}
        onClick = {nextPage}
        > <BsArrowRightSquareFill/>
        </button>

        <button className='btn-prev'
        value={data.pageOption} 
        onClick = {prevPage}
        > <BsArrowLeftSquareFill/>
        </button>
    </div>
       
    );
};

export default ButtonsPrevNext;


//Simple buttons to change page which make the API address change.
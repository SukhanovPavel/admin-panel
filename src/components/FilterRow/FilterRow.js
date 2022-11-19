import { useState } from 'react';
import { 
FilterRowTop,
FilterRowBottom
} from '../index';

const dateI = new Date();

export const FilterRow = () =>{

    let [inputValue, setInputValue] = useState("");

    let [filter, setFilter] = useState(false);
    
    let [dateValueInputOne, setDateValueInputOne] = useState(`${dateI.getDate()}.${
        dateI.getMonth() > 9 ? dateI.getMonth() : "0" + dateI.getMonth()
      }.${dateI.getFullYear()}`);
    let [dateValueInputTwo, setDateValueInputTwo] = useState('');


    // let [filter, setFilter] = useState(true);
    // let [dateValueInputOne, setDateValueInputOne] = useState(`${dateI.getDate()}.${
    //     dateI.getMonth() > 9 ? dateI.getMonth() : "0" + dateI.getMonth()
    //   }.${dateI.getFullYear()}`);
    // let [dateValueInputTwo, setDateValueInputTwo] = useState('');

    return (
        <>
        <FilterRowTop
            onChange={ (event) => setInputValue(inputValue = event.target.value) }
            inputValue={ inputValue }
            handleClickInput={ () => setInputValue(inputValue = "") }
            handleClickFiltres={ () => setFilter(!filter) }
            handleClickClearFilters={ () => setInputValue(inputValue = "") }
        />
        { filter? 
            <FilterRowBottom 
                filterNone = { filter }
                dateValueInputOne={ dateValueInputOne }
                dateValueInputTwo={ dateValueInputTwo }
                handleClickDate={ () => setDateValueInputOne(dateValueInputOne="") }
                handleClickDateTwo={ () => setDateValueInputTwo(dateValueInputTwo="") }
                onChangeDateOne={ (event) => setDateValueInputOne(dateValueInputOne = event.target.value) }
                onChangeDateTwo={ (event) => setDateValueInputTwo(dateValueInputTwo = event.target.value) }
        /> 
        : null }
        </>
    )
}
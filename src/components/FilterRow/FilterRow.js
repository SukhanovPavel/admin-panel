import { useState } from 'react';

import { 
FilterRowTop,
FilterRowBottom
} from '../index';

import { useSelector } from 'react-redux';

const dateI = new Date();

export const FilterRow = () =>{

    const openFilter = useSelector(state => state.filtersRow.openFilterButton); 

    let [inputValue, setInputValue] = useState("");

    let [filter, setFilter] = useState(false);
    
    let [dateValueInputOne, setDateValueInputOne] = useState(`${dateI.getDate()}.${
        dateI.getMonth() > 9 ? dateI.getMonth() : "0" + dateI.getMonth()
      }.${dateI.getFullYear()}`);
    let [dateValueInputTwo, setDateValueInputTwo] = useState('');

    const openFiltersButton = useSelector(store => store.filtersRow.openFiltersButton)

    return (
        <>
        <FilterRowTop
            onChange={ (event) => setInputValue(inputValue = event.target.value) }
            inputValue={ inputValue }
            handleClickInput={ () => setInputValue(inputValue = "") }
            handleClickFiltres={ () => setFilter(!filter) }
            handleClickClearFilters={ () => setInputValue(inputValue = "") }
        />
        { 
        // filter? 
        !openFiltersButton?
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
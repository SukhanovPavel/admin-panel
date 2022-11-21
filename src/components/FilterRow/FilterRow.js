import { useState } from 'react';
import { useSelector } from 'react-redux';

import { 
    FilterRowTop,
    FilterRowBottom
} from '../index';

import { getIsFiltersOpen } from '../../store/selectors/view'

const dateI = new Date();

export const FilterRow = () =>{


    let [inputValue, setInputValue] = useState("");

    let [filter, setFilter] = useState(false);
    
    let [dateValueInputOne, setDateValueInputOne] = useState(`${dateI.getDate()}.${
        dateI.getMonth() > 9 ? dateI.getMonth() : "0" + dateI.getMonth()
      }.${dateI.getFullYear()}`);
    let [dateValueInputTwo, setDateValueInputTwo] = useState('');

    const isFiltersOpen = useSelector(getIsFiltersOpen)

    return (
        <>
        <FilterRowTop
            onChange={ (event) => setInputValue(inputValue = event.target.value) }
            inputValue={ inputValue }
            handleClickInput={ () => setInputValue(inputValue = "") }
            handleClickFiltres={ () => setFilter(!filter) }
            handleClickClearFilters={ () => setInputValue(inputValue = "") }
        />

        {isFiltersOpen &&
            <FilterRowBottom 
                filterNone = { filter }
                dateValueInputOne={ dateValueInputOne }
                dateValueInputTwo={ dateValueInputTwo }
                handleClickDate={ () => setDateValueInputOne(dateValueInputOne="") }
                handleClickDateTwo={ () => setDateValueInputTwo(dateValueInputTwo="") }
                onChangeDateOne={ (event) => setDateValueInputOne(dateValueInputOne = event.target.value) }
                onChangeDateTwo={ (event) => setDateValueInputTwo(dateValueInputTwo = event.target.value) }
            />
        }
        </>
    )
}
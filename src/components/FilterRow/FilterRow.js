import { useState } from 'react';
import { 
FilterRowTop,
FilterRowBottom
} from '../index';

export const FilterRow = () =>{
    const [filter, setFilter] = useState(true);
    function hClick() {
        return setFilter(!filter)
    }
    return (
        <>
        <FilterRowTop handleClick={hClick}/>
        <FilterRowBottom filterNone={filter}/>
        </>
    )
}
import { Input, Search } from '../index';

export const Searchbar = ({
    span = <Search color={"#459DF5"} />,
    value,
    placeholder,
    handleClickSearchbar,
    children
}) => {
    return (
        <Input
            span={ span }
            value={ value }
            placeholder={ placeholder }
            onChange={ handleClickSearchbar }
            children={ children }
        />
    )
}
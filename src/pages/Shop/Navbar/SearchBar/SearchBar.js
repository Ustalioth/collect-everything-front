import React, {useState} from "react";
import { XLg } from "react-bootstrap-icons";
import { SearchBar as ShopSearchBar } from "./SearchBar.styles";
import { useTranslation } from 'react-i18next';

export const SearchBar = () => {

    const {t} = useTranslation();

    const [searchString, setSearchString] = useState("");

    const handleChange = event => setSearchString(event.target.value);

    return (
        <ShopSearchBar>
            <label htmlFor="search">{ t('navigation.search') }: </label>
            <input 
                value={searchString} 
                onChange={handleChange} 
                type="text" 
                name="search" 
            />
            <XLg />
        </ShopSearchBar>
    );
}
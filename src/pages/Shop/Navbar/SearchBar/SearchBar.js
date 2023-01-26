import React, {useState} from "react";
import { XLg } from "react-bootstrap-icons";
import { SearchBar as ShopSearchBar } from "./SearchBar.styles";

export const SearchBar = () => {

    const [searchString, setSearchString] = useState("");

    const handleChange = event => setSearchString(event.target.value);

    return (
        <ShopSearchBar>
            <label htmlFor="search">Recherche: </label>
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
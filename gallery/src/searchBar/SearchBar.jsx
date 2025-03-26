import SearchIcon from '@mui/icons-material/Search';

import './SearchBar.css'

import { useState } from 'react';

export default function SearchBar({setTextInputValue}) {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleKeyDown = (e) => {
      if (e.key === "Enter" && inputValue.trim() !== "") {
        setTextInputValue(inputValue);
        setInputValue(""); 
      } else if (e.key === "Enter" && inputValue.trim() === "") {
        alert("Please, type something before searching");
      }
    };
  
    const handleSubmit = () => {
      if (inputValue.trim() !== "") {
        setTextInputValue(inputValue);
        setInputValue("");
      } else {
        alert("Please, type something before searching");
      }
    };

    return (
        <div id='inputAlign'>
            <input
                id='inputSearch'
                placeholder='Search...'
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
            <SearchIcon id='btnSearch' onClick={handleSubmit} />
        </div>
    );
}
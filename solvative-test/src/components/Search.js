import { useEffect, useRef, useState } from "react";
import axios from 'axios'

const Search = ({setFilteredData}) => {
  const inputRef = useRef();
  const [searchQuery, setSearchQuery] = useState(""); 
  const [foucused, setFocused] = useState(false);

  const API_URL = process.env.SEARCH_API

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const onSearch = async(searchQuery) =>{
    try{
        const res = await axios.get(API_URL)
        const filtered = res.filter(item =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
          );
          setFilteredData(filtered);
    }catch(error){
        console.log(error)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();  
      onSearch(searchQuery);
  };

  const handleAcivateInputField = (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "/") {
      setFocused(true);
      inputRef.current.focus();
    }
    console.log(event.key);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleAcivateInputField);
    return () => {
      document.removeEventListener("keydown", handleAcivateInputField);
    };
  }, []);
  return (
    <>
      <form onSubmit={handleSubmit} >
        <input
        className="searchBox"
          ref={inputRef}
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
        />
      </form>
    </>
  );
};
export default Search;

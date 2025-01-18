import { createContext, useState } from "react";

export const SearchContext = createContext(null);

const SearchContextProvider = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const searchContextValue = {
    searchTerm,
    handleSearch,
  };

  return (
    <SearchContext.Provider value={searchContextValue}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;

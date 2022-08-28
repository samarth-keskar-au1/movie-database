import React, { useState, useContext } from "react";

import useDebouncedFetch from "../Hooks/useDebouncedFetch";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("avengers");
  const [isFirstFetch, setIsFirstFetch] = useState(true);
  const {
    isLoading,
    error,
    data: movies,
  } = useDebouncedFetch(query ? `&s=${query}` : "", isFirstFetch);

  return (
    <AppContext.Provider
      value={{ isLoading, error, movies, query, setQuery, setIsFirstFetch }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

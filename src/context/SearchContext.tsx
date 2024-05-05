import { ReactNode, createContext, useContext, useState } from "react"
import { SearchContextType } from "../types"

const SearchContext = createContext<SearchContextType>({
    search: "",
    setSearch: () => {},
});

export const SearchContextProvider = ({ children }: { children: ReactNode }) => {
    const [search, setSearch] = useState<string>("");

    return (
        <SearchContext.Provider value={{search, setSearch}}>
            {children}
        </SearchContext.Provider>
    )
}

export const useSearch = () => useContext(SearchContext);
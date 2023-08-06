import DarkModeReducer from "./darkModeReduce";
import { createContext, useReducer} from "react";

const INITIAL_STATE = {
    darkMode: true,
}

export const DarkModeContext = createContext(INITIAL_STATE)

export const DarkModeContextProvider = ({children}) =>{
    const [stae, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

    return( <DarkModeContext.Provider value={{ darkMode: stae.darkMode, dispatch }}>
        {children}
    </DarkModeContext.Provider>
    );
}
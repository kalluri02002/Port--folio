import { createContext,useReducer } from "react";
export const themecontex=createContext();
const initialState={darkmode:false};
const themrReducer=(state,action)=>{
    switch(action.type){
        case 'toggle':
            return{darkmode: !state.darkmode};
            default:
                return state;
    }
};
export const ThemeProvider=(props)=>{
    const[state,dispatch]=useReducer(themrReducer,initialState)
    return(
        <themecontex.Provider value={{state,dispatch}}>
            {props.children}

        </themecontex.Provider>
        
    )
}
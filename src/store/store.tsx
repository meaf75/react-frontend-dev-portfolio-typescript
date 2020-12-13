import React, { createContext, useReducer } from "react";
import { SpanishTranslation } from "../constants/Translation";
import Reducer from './reducer'
import { AppActionTypes, IStoreProps, StateProps } from "./storeTypes";

const initialState: StateProps = {
    currentLanguage: 'es',
    translation: SpanishTranslation
};

const Store = (props: IStoreProps) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                {props.children}
            </StateContext.Provider>
        </DispatchContext.Provider>
    )
};

export const StateContext = React.createContext(initialState);
export const DispatchContext = createContext<React.Dispatch<AppActionTypes>>(() => null);
export default Store;
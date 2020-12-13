import { EnglishTranslation, SpanishTranslation } from "../constants/Translation";
import { AppActionTypes, StateProps } from "./storeTypes";


const Reducer = (state: StateProps, action : AppActionTypes) => {
    switch (action.type) {
        case 'SET_LANGUAGE':
            state.currentLanguage = action.payload;

            if(state.currentLanguage == "en"){
                state.translation = EnglishTranslation
            } else {
                state.translation = SpanishTranslation
            }
            break
        default:
            return state;
    }

    return {...state};
};

export default Reducer;
import { ITranslation } from "../constants/TranslationTypes";

export type ActionTypes = 
'SET_LANGUAGE';

const SET_LANGUAGE = 'SET_LANGUAGE'

export type Languages = 'es' | 'en'

export interface StateProps {
    currentLanguage: Languages;
    translation: ITranslation;
}

export interface IStoreProps {
    children: React.ReactNode
}

export interface ElementActionType<t,d> {
    type: t,
    payload: d
}

export type AppActionTypes = ElementActionType<typeof SET_LANGUAGE, Languages>

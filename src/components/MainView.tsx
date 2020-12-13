import React, { CSSProperties, useEffect } from "react";
import { useContext } from "react";
import { DispatchContext, StateContext } from "../store/store";
import About from "./About";
import { Header } from "./Header";
import "../scss/MainView.scss"
import { Projects } from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import Footer from "./Footer";

export const MainView = () => {

    const { currentLanguage } = useContext(StateContext);
    const dispatch = useContext(DispatchContext);

    //#region Callbacks
    const ChangeToLanguageEs = () => dispatch({type: 'SET_LANGUAGE', payload: "es"});
    const ChangeToLanguageEn = () => dispatch({type: 'SET_LANGUAGE', payload: "en"});
    //#endregion

    const languageEsSelected = currentLanguage == 'es' ? 'black' : undefined; 
    const languageEnSelected = currentLanguage == 'en' ? 'black' : undefined; 
   
    return (
        <div>
            <Header />

            <div className="col-md-12 mx-auto text-center language languages-container">
                <div onClick={ChangeToLanguageEs} style={{ backgroundColor: languageEsSelected}}>
                    <span className='iconify language-icon' data-icon="emojione-v1:flag-for-spain"></span>
                </div>
                <div onClick={ChangeToLanguageEn} className='margin-left-10' style={{ backgroundColor: languageEnSelected }}>
                    <span className='iconify language-icon' data-icon="emojione-v1:flag-for-united-states"></span>
                </div>
            </div>
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Footer />
        </div>
    )
}
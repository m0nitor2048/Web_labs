import React from 'react'

import MainRouter from "./components/MainContent/MainRouter";
import HeaderTopBar from "./components/Header/HeaderTopBar";
import Footer from "./components/Footer/Footer";

{/*ctrl + alt + L*/}
{/*ctrl + alt + T*/}

function App() {
    return (

        <div className="App-root">
            <HeaderTopBar/>
            <MainRouter/>
            <Footer/>
        </div>
    );
}

export default App;

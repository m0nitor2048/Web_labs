import React from 'react'
// import { FirebaseDatabaseProvider } from "@react-firebase/database";
import firebase from 'firebase'


import MainRouter from "./components/MainContent/MainRouter";
import Footer from "./components/Footer/Footer";
import {AuthProvider} from "./contexts/AuthContext";


function App() {

    return (
        <div className="App-root">
            {/*<AuthProvider>*/}

                <MainRouter/>
                <Footer/>
            {/*</AuthProvider>*/}
        </div>
    );
}


export default App;



{/*ctrl + alt + L*/}
{/*ctrl + alt + T*/}
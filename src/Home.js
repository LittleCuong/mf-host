import Header from "layout/Header"
import Footer from "layout/Footer"
import Recipes from "pages/Recipes";

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Authenticator } from '@aws-amplify/ui-react'
import { Auth } from 'aws-amplify';

export default function Home() {

    return (
        <Authenticator>
        {({ signOut, user }) => (
            <div className="h-screen bg-[#F9F9F9]">
                <Header/>
                <div className="h-screen mt-10 text-3xl mx-auto max-w-6xl">
                <BrowserRouter>
                    <Routes>
                    <Route path='/' element={<Recipes/>}></Route>
                    </Routes>
                </BrowserRouter>
                </div>
                <Footer/>
            </div>
        )}
        </Authenticator>
    );
}
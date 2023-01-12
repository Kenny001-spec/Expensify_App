import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Homepage from "../components/Homepage";
import Header from "../components/Header";
import Create from "../components/Create";
import Edit from "../components/Edit";
import Help from "../components/Help";
import Page404 from "../components/Page404";
import Profile from "../components/Profile";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" exact={true} element={<Homepage />}></Route>
                <Route path="/create" element={<Create />}>
                    <Route path=":/user" element={<Profile />}></Route>
                </Route>
                <Route path="/edit" element={<Edit />}></Route>
                <Route path="/help" element={<Help />}></Route>
                <Route path="*" element={<Page404 />}></Route>
            </Routes>
        </BrowserRouter >
    )
}

export default AppRouter;
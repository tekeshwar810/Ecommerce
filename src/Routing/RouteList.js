import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Dashboard from "../Components/dashboard";
import Login from "../Components/login";
import Profile from "../Components/profile";
// import Chat from "../Components/Chat";
import UserRegistration from "../Components/userRegistration";

const RoutesList = () => {
    return (
            <Routes>
                <Route path="/signup" element={<UserRegistration />} />
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
    )
}

export default RoutesList;
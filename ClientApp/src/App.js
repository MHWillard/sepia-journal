import React, { Component, useState, useEffect, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
//import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import { UserPostsContext } from './contexts/UserPostsContext.js'
import { UserDataContext } from './contexts/UserDataContext.js'
import { TokenContext } from './contexts/TokenContext.js'
import FakeAuthController from './controllers/fakeAuth';

import { Home } from "./components/Home";
import UserFeed from './components/UserFeed.js';
import NewPost from "./components/NewPost.js";
import NotFound from "./components/NotFound.js";
import Login from './components/Login.js';
import CreateAccount from './components/CreateAccount.js';
import Profile from './components/Profile.js'
import ProtectedRoute from './routes/ProtectedRoute.js'
//import './custom.css';

export default function App() {
    const displayName = App.name;
    const fakeAuth = new FakeAuthController();

    const [publicUser, setPublicUser] = useState([]); //publicUserID and PublicUsername together
    const [publicUserPosts, setPublicUserPosts] = useState([]); //later: {} nested objects
    const [userLoginData, setUserLoginData] = useState([]);
    const [loggedInFlag, setLoggedInFlag] = useState(false);
    const [token, setToken] = useState(null);
    /*
        function getPosts() {
            var posts = ["first post", "second post", "third post"]
            return posts
        }

        useEffect(() => {
            const newPosts = getPosts();
            setPublicUserPosts(newPosts);
        }, []); */

    async function handleLogin() {
        const token = await fakeAuth.getToken();
        setToken(token);
    }

    return (
        
        <Layout>
                        <Routes>
                            <Route index element={<Home />} />
                            <Route path="home" element={<Home />} />
                            <Route path="login" element={<Login token={token} handleLogin={handleLogin} />} />
                            <Route path="create-account" element={<CreateAccount />} />
                            <Route path="feed/*" element={<UserFeed token={token} />} />
                            <Route path="new-post" element={<ProtectedRoute token={token}><NewPost /></ProtectedRoute>} />
                            <Route path="profile" element={<ProtectedRoute token={token}><Profile /></ProtectedRoute>} />

                            <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        
    );  
}

/*                     {AppRoutes.map((route, index) => {
                        const { element, ...rest } = route;
                        return <Route key={index} {...rest} element={element} />;
                    })} */
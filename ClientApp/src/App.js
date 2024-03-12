import React, { Component, useState, useEffect, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import { UserPostsContext } from './contexts/UserPostsContext.js'
import { UserDataContext } from './contexts/UserDataContext.js'
import { TokenContext } from './contexts/TokenContext.js'
//import './custom.css';

export default function App() {
    const displayName = App.name;

    const [publicUser, setPublicUser] = useState([]); //publicUserID and PublicUsername together
    const [publicUserPosts, setPublicUserPosts] = useState([]); //later: {} nested objects
    const [userLoginData, setUserLoginData] = useState([]);
    const [loggedInFlag, setLoggedInFlag] = useState(false);
    const userDataContext = useContext(UserDataContext);
    const userPostsContext = useContext(UserPostsContext);
    const tokenContext = useContext(TokenContext);
    
    /*

        
        function getPosts() {
            var posts = ["first post", "second post", "third post"]
            return posts
        }

        useEffect(() => {
            const newPosts = getPosts();
            setPublicUserPosts(newPosts);
        }, []); */

    return (
        
        <Layout>
            <UserDataContext.Provider value={userDataContext}>
                <UserPostsContext.Provider value={userPostsContext}>
                    <TokenContext.Provider value={tokenContext}>
                <Routes>
                    {AppRoutes.map((route, index) => {
                        const { element, ...rest } = route;
                        return <Route key={index} {...rest} element={element} />;
                    })}
                </Routes>
                    </TokenContext.Provider>
                 </UserPostsContext.Provider>
             </UserDataContext.Provider>
            </Layout>
        
    );  
}
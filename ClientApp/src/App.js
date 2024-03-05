import React, { Component, useState, useEffect, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import { PostsContext } from './contexts/PostsContext.js'
import { LoginContext } from './contexts/LoginContext.js'
//import './custom.css';

export default function App() {
    const displayName = App.name;

    const [publicUser, setPublicUser] = useState([]); //publicUserID and PublicUsername together
    const [publicUserPosts, setPublicUserPosts] = useState([]); //later: {} nested objects
    const [userLoginData, setUserLoginData] = useState([]);
    const [loggedInFlag, setLoggedInFlag] = useState(false);
    const loginContext = useContext(LoginContext);

    useEffect(() => {
        const loginFlag = loginContext.isLoggedIn;
        setLoggedInFlag(loginFlag);
    }, [loginContext])
    
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
        <LoginContext.Provider value={loginContext}>
            {/*<PostsContext.Provider value={{ publicUserPosts, setPublicUserPosts }}>*/}
            <Layout>
                <Routes>
                    {AppRoutes.map((route, index) => {
                        const { element, ...rest } = route;
                        return <Route key={index} {...rest} element={element} />;
                    })}
                </Routes>
            </Layout>
            {/*</PostsContext.Provider>*/}
        </LoginContext.Provider>
    );  
}
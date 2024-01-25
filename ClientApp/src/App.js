import React, { Component, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import { PostsContext } from './contexts/PostsContext.js'
import './custom.css';

/*
export default class App extends Component {
    static displayName = App.name;

    const [publicUser, setPublicUser] = useState([]); //publicUserID and PublicUsername together
    const [publicUserPosts, setPublicUserPosts] = useState([]); //later: {} nested objects

  render() {
    return (
      <Layout>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })}
        </Routes>
      </Layout>
    );
  }
}
*/

export default function App() {
    const displayName = App.name;

    const [publicUser, setPublicUser] = useState([]); //publicUserID and PublicUsername together
    const [publicUserPosts, setPublicUserPosts] = useState('a'); //later: {} nested objects

        
        function getPosts() {
            var posts = ['1','2']
            return posts
        }

        useEffect(() => {
            const newPosts = getPosts();
            setPublicUserPosts(newPosts);
        }, []);

    return (
        <PostsContext.Provider value={{ publicUserPosts, setPublicUserPosts }}>
        <Layout>
            <Routes>
                {AppRoutes.map((route, index) => {
                    const { element, ...rest } = route;
                    return <Route key={index} {...rest} element={element} />;
                })}
            </Routes>
            </Layout>
        </PostsContext.Provider>
    );  
}
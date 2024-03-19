import DocumentTitle from "./DocumentTitle.js"
import { UserPostsContext } from "../contexts/UserPostsContext.js"
import React, { useState, useEffect, useContext } from 'react';

//Needs to get posts state and bleed this into the feed-body

export default function PublicFeed() {

    const [ userPosts, setUserPosts ] = useState([]);
    DocumentTitle("Sepia Journal - LinterDude's Journal")
    const posts = useContext(UserPostsContext);


    useEffect(() => {
        setUserPosts([{"post": "4"}, {"post":"5"}, {"post":"6"}]);
    },[]);

    function DefinePosts() {
        if (userPosts) {
            return <div id="journal-feed">
                {userPosts.map((item, index) => (
                    <div className="journal-post" key={index}>
                        <p>{item.post}</p>
                    </div>
                ))}
            </div>
        } else {
            return <div id="journal-feed"><p>nothing</p>
                    </div>
        }
    }

    return (
        <div id="feed-body">
            <DefinePosts />
            <div>
                <form action="https://localhost:44440/new-post">
                    <button type="submit" id="new-post-button">New Post</button>
                </form>
         </div>
        </div>
    )
}
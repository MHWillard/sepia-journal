import DocumentTitle from "./DocumentTitle.js"
import { UserPostsContext } from "../contexts/UserPostsContext.js"
import React, { useState, useEffect, useContext } from 'react';

//Needs to get posts state and bleed this into the feed-body

export default function PublicFeed() {

    const { userPosts, setUserPosts } = useState({});
    DocumentTitle("Sepia Journal - LinterDude's Journal")
    const posts = useContext(UserPostsContext);


    useEffect(() => {
        setUserPosts('');
    }, [posts, setUserPosts]);

    function DefinePosts() {
        if (userPosts !== '') {
            return <div id="journal-feed">
                {userPosts.map((item, index) => (
                    <div class="journal-post" key={index}>
                        <p>{item}</p>
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
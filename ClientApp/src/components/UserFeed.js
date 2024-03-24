import DocumentTitle from "./DocumentTitle.js"
import { UserPostsContext } from "../contexts/UserPostsContext.js"
import React, { useState, useEffect, useContext } from 'react';
import ProtectedRoute from '../routes/ProtectedRoute.js'

//Needs to get posts state and bleed this into the feed-body

export default function UserFeed(token) {
    const [userToken, setUserToken] = useState(null);
    const [ userPosts, setUserPosts ] = useState([]);
    DocumentTitle("Sepia Journal - LinterDude's Journal")
    const posts = useContext(UserPostsContext);


    useEffect(() => {
        setUserToken(token);
    },[token]);

    function DefinePosts() {
        if (!userPosts || userPosts === []) {
            return <div id="journal-feed">
                {userPosts.map((item, index) => (
                    <div className="journal-post" key={index}>
                        <p>{item.post}</p>
                    </div>
                ))}
            </div>
        } else {
            return <div id="journal-feed"><p>This user has no posts.</p>
                    </div>
        }
    }

    function NewPostButton() {
        if (!userToken || userToken === null) {
            return <br />
        } else {
            return <div>
                <form action="https://localhost:44440/new-post">
                    <button type="submit" id="new-post-button">New Post</button>
                </form>
            </div>
        }
    }

    return (
        <div id="feed-body">
            <DefinePosts />
            <NewPostButton />
        </div>
    )
}
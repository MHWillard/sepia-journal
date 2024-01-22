import DocumentTitle from "./DocumentTitle.js"
import React, { useState, useEffect } from 'react';

//Needs to get posts state and bleed this into the feed-body

export default function PublicFeed() {
    const [publicUser, setPublicUser] = useState([]); //publicUserID and PublicUsername together
    const [publicUserPosts, setPublicUserPosts] = useState([]); //later: {} nested objects
    //posts: [{"id": 1, "content": "post-content-here"}]
    //publicUserFeed: [{"publicUserID:" xxxx, "publicUsername": xxxxx, publicUserPosts: [{xxxxx, xxxxx}]}]
    //in full version: this data pulls from the user's post table data and fills it in

    function getPosts() {
        var posts = ['first post', 'second post', 'third post']
        return posts
    }

    useEffect(() => {
        const newPosts = getPosts();
        setPublicUserPosts(newPosts);
        }, []);

        //then in feed: get publicUserPosts and map over the div
    DocumentTitle("Sepia Journal - testinguser's Journal")
    return (
        <div id="feed-body">
        <div id="journal-feed">
            <div class="journal-post">
                <p>first post</p>
            </div>
            <div class="journal-post">
                <p>second post</p>
            </div>
            <div class="journal-post">
                <p>third post</p>
            </div>
        </div>
            <div>
                <form action="https://localhost:44440/new-post">
                    <button type="submit" id="new-post-button">New Post</button>
                </form>
         </div>
        </div>
    )
}
import DocumentTitle from "./DocumentTitle.js"
import { PostsContext } from "../contexts/PostsContext.js"
import React, { useState, useEffect, useContext } from 'react';

//Needs to get posts state and bleed this into the feed-body

export default function PublicFeed() {

    const { publicUserPosts, setPublicUserPosts } = useContext(PostsContext);
    DocumentTitle("Sepia Journal - testinguser's Journal")

    return (
        <div id="feed-body">
            <div id="journal-feed">
                    {publicUserPosts.map((item, index) => (
                        <div class="journal-post" key={index}>
                            <p>{item}</p>
                        </div>
                    ))}
        </div>
            <div>
                <form action="https://localhost:44440/new-post">
                    <button type="submit" id="new-post-button">New Post</button>
                </form>
         </div>
        </div>
    )
}
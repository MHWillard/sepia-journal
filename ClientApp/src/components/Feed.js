import DocumentTitle from "./DocumentTitle.js"
import React, { useState } from 'react';

//Needs to get posts state and bleed this into the feed-body

export default function Feed() {
    const [posts, setPosts] = useState([]); //map this into the div journal-post classes
    //posts: [{"id": 1, "content": "post-content-here"}]
    //in full version: this data pulls from the user's post table data and fills it in

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
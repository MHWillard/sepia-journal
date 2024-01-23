import DocumentTitle from "./DocumentTitle.js"
import { PostsContext } from "../contexts/PostsContext.js"
import React, { useContext } from 'react';

export default function NewPost() {
    DocumentTitle("Sepia Journal - testinguser's Journal - New Post")

    const { setPublicUserPosts } = useContext(PostsContext);

    return (
        <div id="post-body">
            <div id="post-text-box">
                <form action="https://localhost:44440/feed">
                    <textarea id="new-post-textbox">text</textarea><br></br>
                    <button type="submit" id="submit-post-button">Submit Post</button>
                </form>
            </div>
        </div>
    )
}

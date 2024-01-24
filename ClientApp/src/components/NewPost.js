import DocumentTitle from "./DocumentTitle.js"
import { PostsContext } from "../contexts/PostsContext.js"
import React, { useContext } from 'react';

export default function NewPost() {
    DocumentTitle("Sepia Journal - testinguser's Journal - New Post")

    const { publicUserPosts, setPublicUserPosts } = useContext(PostsContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newPost = document.getElementById("new-post-textbox").value;
        publicUserPosts.push(newPost);
        setPublicUserPosts(publicUserPosts);        
    }

    return (
        <div id="post-body">
            <div id="post-text-box">
                <form onSubmit={handleSubmit} action="https://localhost:44440/feed">
                    <textarea id="new-post-textbox"></textarea><br></br>
                    <button type="submit" id="submit-post-button">Submit Post</button>
                </form>
            </div>
        </div>
    )
}

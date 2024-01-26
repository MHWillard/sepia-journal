import DocumentTitle from "./DocumentTitle.js"
import { PostsContext } from "../contexts/PostsContext.js"
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewPost() {
    DocumentTitle("Sepia Journal - testinguser's Journal - New Post")

    const { publicUserPosts, setPublicUserPosts } = useContext(PostsContext);
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        const newPost = document.getElementById("new-post-textbox").value;
        publicUserPosts.push(newPost);
        setPublicUserPosts(publicUserPosts);
        navigate('/feed');
    }

    return (
        <div id="post-body">
            <div id="post-text-box">
                <form onSubmit={handleSubmit}>
                    <textarea id="new-post-textbox"></textarea><br></br>
                    <button type="submit" id="submit-post-button">Submit Post</button>
                </form>
            </div>
        </div>
    )
}

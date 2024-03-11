import DocumentTitle from "./DocumentTitle.js"
import { UserPostsContext } from "../contexts/UserPostsContext.js"
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewPost() {
    DocumentTitle("Sepia Journal - LinterDude's Journal - New Post")

    const { publicUserPosts, setPublicUserPosts } = useContext(UserPostsContext);
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        const newPost = document.getElementById("new-post-textbox").value;
        publicUserPosts.push(newPost);
        setPublicUserPosts(publicUserPosts);
        navigate('/feed');
    }

    useEffect(() => {
        navigate("/404")
    });

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

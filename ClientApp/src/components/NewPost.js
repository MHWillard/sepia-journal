import DocumentTitle from "./DocumentTitle.js"
import { TokenContext } from "../contexts/TokenContext.js"
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewPost() {
    DocumentTitle("Sepia Journal - LinterDude's Journal - New Post")

    const { newPost, setNewPost } = useState('');
    const token = useContext(TokenContext);
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        const newPost = document.getElementById("new-post-textbox").value;
        setNewPost(newPost);
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

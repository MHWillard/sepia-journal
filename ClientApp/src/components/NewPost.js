import DocumentTitle from "./DocumentTitle.js"
import { TokenContext } from "../contexts/TokenContext.js"
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewPost(token, url) {
    DocumentTitle("Sepia Journal - LinterDude's Journal - New Post")
    const [ newPost, setNewPost ] = useState('');
    const navigate = useNavigate()
    function handleChange(event) {
        event.preventDefault();
        const { value } = event.target;
        setNewPost(prevState => ({ ...prevState, newPost: value }));
        //        const newPost = document.getElementById("new-post-textbox").value;
        //setNewPost(newPost);
    };

    async function handleSubmit(event) {
        event.preventDefault();
        return navigate(url);
    }

    return (
        <div id="post-body">
            <div id="post-text-box">
                <form onSubmit={handleSubmit}>
                    <textarea id="new-post-textbox" name="new-post" onChange={handleChange}></textarea><br></br>
                    <button type="submit" id="submit-post-button">Submit Post</button>
                </form>
            </div>
        </div>
    )
}

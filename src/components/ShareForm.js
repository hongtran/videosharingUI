import React, {useState} from "react";
import api from "../api";


function ShareForm() {
    const [url, setUrl] = useState('');
    const [title, setTitle] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const video = {
            url: url,
            title: title
        };
        const rsp = await api.post('/videoshareds', video);
        console.log(rsp);
        setUrl('');
        setTitle('');
    }

    const handleUrlChange = (event) => {
        setUrl(event.target.value);
    }

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    // create form to share a video contain url + title + submit button
    return (
        <div>
            <form>
                <label>
                    Video URL:
                    <input type="text" name="url" value={url} onChange={handleUrlChange} />
                </label>
                <label>
                    Video Title:
                    <input type="text" name="title" value={title} onChange={handleTitleChange} />
                </label>
                <input type="submit" value="Share" onClick={handleSubmit} />
            </form>
        </div>
    );
};

export default ShareForm;

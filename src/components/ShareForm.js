import React from "react";

function ShareForm() {
    // create form to share a video contain url + title + submit button
    return (
        <div>
            <form>
                <label>
                    Video URL:
                    <input type="text" name="url" />
                </label>
                <label>
                    Video Title:
                    <input type="text" name="title" />
                </label>
                <input type="submit" value="Share" />
            </form>
        </div>
    );
};

export default ShareForm;

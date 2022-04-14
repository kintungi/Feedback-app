import React from "react";

const App = () => {
    const title = "Blog post";
    const body = "This is my first blog post";

    const comments = [
        {id: 1, text: "comment one"},
        {id: 2, text: "comment two"},
        {id: 3, text: "comment three"},
        {id: 4, text: "comment four"}
    ]

    const data = true;

    if (!data) return <p>Loading...</p>

    const showComments = true

    return (
        <>
        <h1 className="title">{title}</h1>
        <p className="body">{body}</p>
        <p style={{fontWeight: "bold"}} className="comments">Comments({comments.length})</p>
        {showComments &&  comments.map((comment, index) => {
            return (
                <li key={index}>{comment.text}</li>
            )
        })}
        </>
    )
}

export default App
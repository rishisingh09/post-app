import React, { useState } from 'react'

export const PostForm = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        const post = {
            title: title,
            body: body
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        }).then(res => res.json())
            .then((data) => { console.log(data) })
    }

    return (
        <div>
            <h1>Add Post</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Title</label><br />
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type='text' name='title'></input>
                </div>
                <br />
                <div>
                    <label>Body</label><br />
                    <textarea value={body} onChange={(e) => setBody(e.target.value)} type='text' name='body'></textarea>
                </div>
                <br />
                <button type='submit' >Submit</button>
            </form>
        </div>
    )
}

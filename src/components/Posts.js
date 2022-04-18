import React, { useEffect, useState } from 'react'

export const Posts = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPosts(json))
    }, [])

    return (
        <div className=''>
            Posts
            {posts.map((post) => {
                return <div key={post.id}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                </div>
            })}
        </div>
    )
}

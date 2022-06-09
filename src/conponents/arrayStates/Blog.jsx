import React from 'react'

const Blog = (props) => {

    const {blogs} = props;

    return (
        <div>
            {blogs.map(blog => (
                <div key={blog.id}>
                    <h1> {blog.title} </h1>
                    <p> {blog.title} </p>
                </div>
            ))}
        </div>
    )
}

export default Blog;
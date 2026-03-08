import React from 'react'

async function page({ params }) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    let posts = data;
    const { id } = await params
    let post = posts[id-1];
   


    return (
        <div className='px-4 w-[700px] mt-12 h-62 py-3 bg-gray-600'>
            <h1 className='text-xl capitalize text-white'>
                {
                    post.title
                }
            </h1>
            <p className='text-gray-300 capitalize'>{post.body}</p>
        </div>
    )
}

export default page
'use client'
import Link from 'next/link'
import React, { use, useEffect, useState } from 'react'

function Post({ promise }) {
    const posts = use(promise);
    const [loadPost, setLoadPost] = useState(19)
    const [showingPost, setShowingPost] = useState([])
    const loadMore = () => {
        if (loadPost !== posts.lenght) {
            setLoadPost((prev) => prev+5)
        }
    }
    useEffect(() => {
        setShowingPost(posts.filter((item, idx) => {
            if (idx <= loadPost) {
                return item
            }
        }))
    }, [loadPost])

    return (
        <div>
            <div className='grid grid-cols-3 gap-5'>
                {
                    showingPost.map(({ id, title, body }) => {
                        return <Link key={id} href={'/blog/' + id} className='px-4 py-3 bg-gray-600'>
                            <h1 className='text-xl text-white capitalize'>
                                {title}
                            </h1>
                            <img src='https://images.unsplash.com/photo-1761839258753-85d8eecbbc29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8' />
                            <p className='text-gray-300 capitalize'>{body}</p>
                        </Link>
                    })
                }
            </div>
            <div className='w-full text-center'>
                <button onClick={loadMore} className=' px-4 py-2 bg-blue-400 mt-5'>Load more</button>
            </div>

        </div>
    )
}

export default Post;
import Link from 'next/link'
import Post from './components/posts';
import { Suspense } from 'react';

async function BlogPage() {
    const promise = fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())

    return (
        <div>
            <h1>
                This is blog page
            </h1>
                <Post promise={promise} />
        </div>
    )
}

export default BlogPage
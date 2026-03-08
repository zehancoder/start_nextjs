import Link from 'next/link'

async function BlogPage() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    let posts = data;

    return (
        <div>
            <h1>
                This is blog page
            </h1>
            <div className='grid grid-cols-3 gap-5'>
                {
                    posts.map(({ id, title, body }) => {
                        return <Link key={id} href={'/blog/' + id} className='px-4 py-3 bg-gray-600'>
                            <h1 className='text-xl text-white capitalize'>
                                {title}
                            </h1>
                            <p className='text-gray-300 capitalize'>{body}</p>
                        </Link>
                    })
                }
            </div>
        </div>
    )
}

export default BlogPage
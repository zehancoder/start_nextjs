import React from 'react'

function layout({ children }) {
    return (
        <div>
            <div>
                This is post page
            </div>
            {
                children
            }
        </div>
    )
}

export default layout
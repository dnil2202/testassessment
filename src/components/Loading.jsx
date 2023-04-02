import React from 'react'

const Loading = () => {
    return (
        <div className="fixed inset-0 bg-transparent backdrop-blur-2xl flex items-center justify-center z-50">
            <div className="p-2 rounded">
                <p 
                className='animate-bounce h-40 bg-white rounded-full bg-gradient-to-r from-green-500 to-blue-600 text-transparent font-extrabold bg-clip-text text-3xl'
                >
                    ......LOADING.......
                </p>
            </div>
        </div>
    )
}

export default Loading
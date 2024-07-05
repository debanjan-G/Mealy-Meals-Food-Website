import React from 'react'
import Link from 'next/link'

const CommunityPage = () => {
    return (
        <div className='flex flex-col items-center gap-4'>
            <h1 className="text-slate-200 text-center text-5xl font-bold my-4">The Community Page</h1>
            <Link href="/meals" className=' text-white mx-4 rounded-md border border-white p-4'>Check out the HOT meals</Link>
            <Link href="/meals/share" className=' text-white mx-4 rounded-md border border-white p-4'>Share Meals</Link>
        </div>
    )
}

export default CommunityPage

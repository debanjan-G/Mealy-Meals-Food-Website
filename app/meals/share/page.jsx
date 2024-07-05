import React from 'react'
import Link from 'next/link'

const MealsSharePage = () => {
    return (
        <div className='flex flex-col items-center gap-4'>
            <h1 className="text-slate-200 text-center text-5xl font-bold my-4">The Meals Share Page</h1>
            <Link href="/meals" className=' text-white mx-4 rounded-md border border-white p-4'>Check out the HOT meals</Link>
            <Link href="/community" className=' text-white mx-4 rounded-md border border-white p-4'>Check out our Community</Link>
        </div>
    )
}

export default MealsSharePage

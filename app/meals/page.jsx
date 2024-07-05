import Link from "next/link";

const MealsPage = () => {

    return (
        <div className='flex flex-col items-center gap-4'>
            <h1 className="text-slate-200 text-center text-5xl font-bold my-4">The Meals Page</h1>
            <Link href="/community" className=' text-white mx-4 rounded-md border border-white p-4'>Check out our Community</Link>
            <Link href="/meals/share" className=' text-white mx-4 rounded-md border border-white p-4'>Share Meals</Link>
            <Link href="/meals" className=' text-white mx-4 rounded-md border border-white p-4'>Check out the HOT meals</Link>

        </div>
    )
}

export default MealsPage;
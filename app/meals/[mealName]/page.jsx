import Link from "next/link"

const MealPage = ({ params }) => {
    return (
        <div className='flex flex-col items-center gap-4'>
            <h1 className="text-slate-200 text-center text-5xl font-bold my-4">Order some delicious {params.mealName} NOW!</h1>
            <Link href="/meals" className=' text-white mx-4 rounded-md border border-white p-4'>Check out the HOT meals</Link>
            <Link href="/meals/share" className=' text-white mx-4 rounded-md border border-white p-4'>Share Meals</Link>
            <Link href="/community" className=' text-white mx-4 rounded-md border border-white p-4'>Check out our Community</Link>

        </div>
    )
}

export default MealPage;
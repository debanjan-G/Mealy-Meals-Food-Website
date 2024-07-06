import Image from 'next/image';

import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';
import classes from './page.module.css';

export default function CommunityPage() {
    return (
        <>
            <header className={`p-4 ${classes.header}`}>
                <h1 className='text-5xl font-semibold '>
                    One shared passion: <span className={` font-bold ${classes.highlight}`}>Food</span>
                </h1>
                <p>Join our community and share your favorite recipes!</p>
            </header>
            <main className="w-[90%] mx-auto m-4 text-center">
                <h2 className='text-orange-500 font-semibold text-5xl'>Community Perks</h2>

                <ul className={`${classes.perks} flex justify-between`}>
                    <li className='flex flex-col items-center'>
                        <Image src={mealIcon} alt="A delicious meal" className='hover:scale-110 transition-all duration-200' />
                        <p>Share & discover recipes</p>
                    </li>
                    <li className='flex flex-col items-center'>
                        <Image src={communityIcon} alt="A crowd of people, cooking" className='hover:scale-110 transition-all duration-200' />
                        <p>Find new friends & like-minded people</p>
                    </li>
                    <li className='flex flex-col items-center'>
                        <Image
                            src={eventsIcon}
                            alt="A crowd of people at a cooking event" className='hover:scale-110 transition-all duration-200'
                        />
                        <p>Participate in exclusive events</p>
                    </li>
                </ul>
            </main>
        </>
    );
}
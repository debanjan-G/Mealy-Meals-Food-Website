import Link from 'next/link';

import classes from './page.module.css';
import ImageSlideshow from '@/components/image slideshow/image-slideshow';


export default function Home() {


  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        
        </div>
        <div>
          <div className={classes.hero}>
            <h1 className='text-center'>Mealy Meals</h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={`my-4 ${classes.section}`} >
          <h2 className='text-4xl font-semibold my-10'>How it works?</h2>
          <p className='p-2 text-xl text-slate-300'>
            Mealy Meals is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p className='p-2 text-xl text-slate-300'>
            Mealy Meals is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={`my-4 ${classes.section}`} >
          <h2 className='text-4xl font-semibold my-10'>Why Mealy Meals?</h2>
          <p className='p-2 text-xl text-slate-300'>
            Mealy Meals is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p className='p-2 text-xl text-slate-300'>
            Mealy Meals is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
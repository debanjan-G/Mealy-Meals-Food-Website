"use client"; // Making this a Client Component

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import classes from "./image-slideshow.module.css"
import Burger from "@/assets/burger.jpg"
import Pizza from "@/assets/pizza.jpg"
import MacNCheese from "@/assets/macncheese.jpg"
import Dumplings from "@/assets/dumplings.jpg"
import Curry from "@/assets/curry.jpg"





const ImageSlideshow = () => {
    const FoodItems = [
        {
            image: Burger,
            alt: "Delicious Burgers"
        },
        {
            image: Pizza,
            alt: "Authentic Italian Pizza"
        },
        {
            image: Curry,
            alt: "Spicy Indian Curry"
        },
        {
            image: Dumplings,
            alt: "Awesome Dumplings"
        },
        {
            image: MacNCheese,
            alt: "Greatest Mac-N-Cheese Ever"
        },
    ]

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {

        setInterval(() => {
            setCurrentImageIndex(prev => (prev < FoodItems.length - 1) ? prev + 1 : 0);
        }, 5000)

    }, [])



    return (
        <div className={classes.slideshow}>
            {FoodItems.map((food, index) =>
                <Image
                    key={index}
                    src={food.image}
                    alt={food.alt}
                    className={(index === currentImageIndex) ? classes.active : ''
                    }
                />

            )}
        </div>
    )
}

export default ImageSlideshow

import React from 'react'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

const OurBeers = () => {

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);

        gsap.to('.cantwo', {
            x: '-100px',
            // y: '-100px',
            rotation:50,
            // duration: 1.5, // Set a duration for the animation
            ease: "power2.out", // Add an easing function for smooth animation
            scrollTrigger: {
                trigger: '.screenthree',
                // markers: true, // Optional: show ScrollTrigger markers for debugging
                start: "top 30%", 
                end:"top top",
                scrub:true
            }
        });

        gsap.to('.canthree', {
            x: '100px',
            // y: '100px',
            rotation:-50,
            // duration: 1.5, // Set a duration for the animation
            ease: "power2.out", // Add an easing function for smooth animation
            scrollTrigger: {
                trigger: '.screenthree',
                // markers: true, // Optional: show ScrollTrigger markers for debugging
                start: "top 30%", 
                end:"top top",
                scrub:true
            }
        });
    },[])
    return (
        <div className='px-16 screenthree'>
            <div className="flex justify-center font-poppins text-[80px] text-white font-semibold">OUR BEERS</div>

            {/* <div className="flex gap-x-60"> */}
                <div className="flex justify-between">

                    <img src="/images/icecantwo.png" alt="" className='h-[624px]  cantwo relative' />
                    <img src="/images/icecanthree.png" alt="" className='h-[619px]  canthree relative' />
                    {/* <img src="" alt="" className='h-[630px] border-2' /> */}
                    {/* <img src="/images/icecanone.png" alt="" className='h-[630px]' /> */}
                </div>
            </div>
            )
}

            export default OurBeers
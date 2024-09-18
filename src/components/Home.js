import React from 'react'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';


const Home = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);


        const canoneTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.screentwo', // Start animation when screentwo enters
                start: 'top 98%',
                endTrigger: '.screenthree', // Continue animation until screenthree
                end: 'top 98%', // End of animation at screenthree
                scrub: true,
                // markers: true, // Uncomment for debugging markers
            }
        });

        // First animation (screentwo) - from position
        canoneTimeline.to('.canone', {
            top: '105%',
            left: '-32%',
            duration: 1,
        });

        const canoneTimelinetwo = gsap.timeline({
            scrollTrigger: {
                trigger: '.screenthree', // Start animation when screentwo enters
                start: 'top 70%',
                // endTrigger: '.screenthree', // Continue animation until screenthree
                end: 'top top', // End of animation at screenthree
                scrub: true,
                // markers: true, // Uncomment for debugging markers
            }
        });

        // Continue animation when screenthree enters the viewport
        canoneTimelinetwo.to('.canone', {
            top: '248%',
            left: '-1%',
            // duration: 1,
        });


        gsap.to('.iceone', {
            top: '201%',
            left: '15%',
            rotation: '180',

            scrollTrigger: {
                trigger: '.screentwo',
                start: 'top 98%',
                end: '80% 50%',
                // markers: true,
                scrub: true
            }
        })

        gsap.to('.icetwo', {
            top: '201%',
            left: '78%',

            scrollTrigger: {
                trigger: '.screentwo',
                start: 'top 98%',
                end: '80% 30%',
                // markers: true,
                scrub: true
            }
        })
        gsap.to('.icethree', {
            top: '194%',
            left: '23%',
            rotation: '360',

            scrollTrigger: {
                trigger: '.screentwo',
                start: 'top 98%',
                end: '80% 50%',
                // markers: true,
                scrub: true
            }
        })
        gsap.to('.icefour', {
            top: '194%',
            left: '5%',
            rotation: '360',

            scrollTrigger: {
                trigger: '.screentwo',
                start: 'top 98%',
                end: '80% 50%',
                // markers: true,
                scrub: true
            }
        })
        gsap.to('.icesix', {
            top: '105%',
            left: '80%',

            scrollTrigger: {
                trigger: '.screentwo',
                start: 'top 98%',
                end: '80% 80%',
                // markers: true,
                scrub: true
            }
        })


    })
    return (
        <div className='relative h-[80%]  mt-10'>
            <div className=" h-full ">
                <div className="absolute flex flex-col justify-center items-center font-poppins text-[420px] font-semibold text-white z-10 w-full">
                    <span className=' m-0 p-0 leading-none'>
                        NEPAL
                    </span>
                    <div className="flex  m-0 p-0">
                        <img src="/images/icebg.png" alt="" className='h-72' />
                    </div>

                </div>

                <div className="absolute flex justify-center items-center z-20 w-full canone">
                    <img src="/images/icecanone.png" alt="Ice Canon" className="h-[630px] " />
                </div>

                <img src="/images/iceone.png" alt="" className="absolute h-20 top-5 left-[530px] z-20 iceone " />
                <img src="/images/icetwo.png" alt="" className="absolute top-[200px] left-[120px] h-32 z-20 icetwo" />
                <img src="/images/icesix.png" alt="" className="absolute h-52 top-[380px] left-[230px] icesix" />

                <img src="/images/icethree.png" alt="" className="absolute h-28 top-[260px] z-20 right-[490px] icethree" />
                <img src="/images/icefour.png" alt="" className="absolute h-28 top-[300px] z-20 right-[200px] icefour " />
                <img src="/images/icefive.png" alt="" className="absolute h-36 top-[30px] z-20 right-[90px] icefive" />

            </div>
        </div>
    )
}

export default Home

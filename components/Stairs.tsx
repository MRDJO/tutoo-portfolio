import React from 'react'
import { animate, motion } from 'framer-motion'
import { exit } from 'process'



const stairAnimation  = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%"
    },
    exit:{
        top: ["100%", "0%"]
    }
};

const reversIndex = (index: number) => {
    const totalSteps = 6;
    return totalSteps - index -1;
}

const Stairs = () => {
  return (
    <div>
        {[...Array(6)].map((_, index)=>{
            return (<motion.div key={index}  variants={stairAnimation} initial="initial" animate="animate" exit="exit" transition={{
                duration: 0.4,
                ease: 'easeInOut',
                delay: reversIndex(index) * 0.1
            }}  
                className='h-full w-full bg-white relative'
            />)
        })}
    </div>
  )
}

export default Stairs

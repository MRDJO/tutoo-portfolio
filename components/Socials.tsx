import React from 'react'
import Link from 'next/link';

import {FaGithub, FaLinkedin , FaYoutube, FaTwitter, FaLinkedinIn} from 'react-icons/fa'
import { icons } from 'lucide-react';

interface SocialsProps {
    containerStyles: string,
    iconStyles?: string 
}

const socials = [
    {
        icon: <FaGithub/>,
        path: ''
    },
    {
        icon: <FaLinkedinIn/>,
        path: ''
    },
    {
        icon: <FaYoutube/>,
        path: ''
    },
    {
        icon: <FaTwitter/>,
        path: ''
    },
]


const Socials = ({containerStyles, iconStyles}: SocialsProps) => {
  return (
    <div className={containerStyles}  >
        {
            socials.map(
                (social, index) => {
                    return <Link key={index} href={social.path} className={iconStyles}  >{social.icon}</Link> 
                }
            )
        }
    </div>
  )
}

export default Socials

import React from 'react'
import { Button } from './../button/button';
import Logo from "../../assets/logo.svg"
import "./navbar.scss"

export const Navbar = () => {
    const handleMail = () => {
        const email = 'codetivite@gmail.com';
        const subject = 'Hey Codetivite!';

        window.location.href = `mailto:${email}?subject=${subject}`;
    }
    return (
        <nav>
            <img src={Logo} alt="logo" className='logo'  />
            <Button onClick={handleMail}>Get in touch</Button>
        </nav>
    )
}

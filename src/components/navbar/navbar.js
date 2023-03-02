import React from 'react'
import { Button } from './../button/button';
import Logo from "../../assets/img/circle.png"
import "./navbar.scss"

export const Navbar = () => {
    const handleMail = () => {
        const email = 'codetivite@gmail.com';
        const subject = 'Hey Codetivite!';

        window.location.href = `mailto:${email}?subject=${subject}`;
    }
    return (
        <nav>

            <h1>c<span><img src={Logo} alt="logo" /></span>detivite</h1>
            <Button onClick={handleMail}>Get in touch</Button>

        </nav>
    )

}

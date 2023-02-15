import React from 'react'
import { Button } from './../button/button';
import Logo from "../../assets/logo.svg"
import "./navbar.scss"

export const Navbar = () => {
    return (
        <nav>
            <img src={Logo} alt="logo" className='logo'  />
            <Button>Get in touch</Button>
        </nav>
    )
}

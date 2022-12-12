import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
        <header>
        <Link to={"/"}><h1>JOB LIB</h1></Link>
        <nav>
        <ul>
            <li><input type="text" /></li>
            <li><Link to={"#"}>Lastest Job</Link></li>
            <li><Link to={"#"}>Past Job</Link></li>
        </ul>
    </nav>
</header>
        </>
    )
}
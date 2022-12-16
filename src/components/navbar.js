import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
        <header>
        <Link to={"/"}><h1>JOB LIB</h1></Link>
        <nav>
        <ul>
            <li class="inline-block px-2 py-4"><input type="text" /></li>
            <li class="inline-block px-5 py-6"><Link to={"#"}>Lastest Job</Link></li>
            <li class="inline-block px-5 py-6"><Link to={"#"}>Past Job</Link></li>
        </ul>
    </nav>
</header>
        </>
    )
}
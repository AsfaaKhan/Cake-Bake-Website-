"use client"
import Link from "next/link";
import { useState } from "react";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { MdOutlineRestaurant } from "react-icons/md";

const Navbar = () => {

    const [navbar, setNavbar] = useState(false)

    const handleNavbar = () => {
        setNavbar(!navbar);
    }

    return (
        <div>

            {/*               NAVBAR                  */}

            <nav className="nav">

                <div className="navContainer ">
                    {/*             LOGO                    */}
                    <div className="logo">
                        <h1 >Cake Mystery</h1>
                    </div>

                    {/*             NAVBAR ITEMS                  */}
                    <div className=" nav-links">
                        <ul>
                            <li>
                                <Link className="nav-link " href="/">Home </Link>
                            </li>
                            <li>
                                <Link className=" nav-link" href="/aboutPage">About</Link>
                            </li>
                            <li>
                                <Link className=" nav-link" href="/menuPage">Menu</Link>
                            </li>
                            <li>
                                <Link className=" nav-link" href="/contactPage">Contact</Link>
                            </li>

                        </ul>
                    </div>


                    {/* HAMBURGER FOR SMALL DEVICES / MOBILES  */}
                    <div className="hamburger" onClick={handleNavbar} >
                        {navbar ? <MdOutlineRestaurant  style={{color:"#1d1111"}}/>: <MdOutlineRestaurantMenu  style={{color:"#1d1111"}}/> }
                    </div>
                </div>

                {navbar && (
                    <div className="mobile-nav">
                            <ul>
                                <li>
                                    <Link className=" nav-link" href="/">Home </Link>
                                </li>
                                <li>
                                    <Link className="nav-link " href="/aboutPage">About</Link>
                                </li>
                                <li>
                                    <Link className=" nav-link" href="/menuPage">Menu</Link>
                                </li>
                                <li>
                                    <Link className=" nav-link" href="/contactPage">Contact </Link>
                                </li>
                            </ul>
                    </div>
                )}
            </nav>
        </div>
    )
}
export default Navbar
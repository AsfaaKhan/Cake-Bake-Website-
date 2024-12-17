import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import Link from "next/link";


export default function Footer() {
    return (
        <div>
            <div className="container footer">
                <div>
                    <p>Follow Us:</p>
                </div>
                <div className="icons">
                    <Link href={'https://www.instagram.com/'}  target="_blank"> <FaInstagramSquare size={30} style={{color : "white"}} /></Link>
                   <Link href={"https://www.facebook.com/"}  target="_blank">
                   <FaFacebookSquare  size={30} style={{color : "white"}}/>
                   </Link>
                   <Link href={"https://twitter.com/"} target="_blank">
                   <FaTwitterSquare  size={30} style={{color : "white" }}/>
                   </Link>
                </div>
                <div>
                    <p>
                    &copy; 2025 By <cite>Cake Mistery.</cite>  All Rights  Reserved
                    </p>
                </div>

            </div>
        </div>
    )
}
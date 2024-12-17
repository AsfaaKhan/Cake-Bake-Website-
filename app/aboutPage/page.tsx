import Image from "next/image"
// import Parallax1 from "@/components/parallax1"


export default function About() {
    return (
        <div>
            {/* 1st */}
            <div className=" aboutSec">
                <div className="container about1">
                    {/* left Side */}
                    <div className=" aboutContent">
                        <h1>About Our Bakery</h1>
                        <p>{`This is your About section. It’s a great space to tell your story and to describe who you are and what you do. If you're a business, talk about how you started and tell the story of your professional journey. People want to know the real you, so don't be afraid to share personal anecdotes. Explain your core values and how you, your organization, or your business stand out from the crowd.`}</p>
                    </div>
                    {/* right Side */}
                    <div className="aboutImg" >
                        <Image src={"/about/about2.jpg"}
                            alt="About Image"
                            width={500}
                            height={400}></Image>
                    </div>
                </div>
                {/* <Parallax1 /> */}
                <div className="container about2">
                    {/* left Side */}
                    <div className="aboutImg" >
                        <Image src={"/about/about3.jpg"}
                            alt="About Image"
                            width={500}
                            height={400}></Image>
                    </div>
                    {/* right Side */}
                    <div className=" aboutContent">
                        <h1>Gluten-Free Products</h1>
                        <p>{`This is your About section. It’s a great space to tell your story and to describe who you are and what you do. If you're a business, talk about how you started and tell the story of your professional journey. People want to know the real you, so don't be afraid to share personal anecdotes. Explain your core values and how you, your organization, or your business stand out from the crowd.`}</p>
                    </div>
                </div>
            </div>

            {/* 2nd */}
            <div className=" aboutSec">
                <div className="container about1">
                    {/* left Side */}
                    <div className=" aboutContent">
                        <h1>Icing decorations</h1>
                        <p>{`This is your About section. It’s a great space to tell your story and to describe who you are and what you do. If you're a business, talk about how you started and tell the story of your professional journey. People want to know the real you, so don't be afraid to share personal anecdotes. Explain your core values and how you, your organization, or your business stand out from the crowd.`}</p>
                    </div>
                    {/* right Side */}
                    <div className="aboutImg" >
                        <Image src={"/about/custom.jpg"}
                            alt="About Image"
                            width={500}
                            height={400}></Image>
                    </div>
                </div>
                {/* <Parallax1 /> */}
                <div className="container about2">
                    {/* left Side */}
                    <div className="aboutImg" >
                        <Image src={"/about/bg.jpg"}
                            alt="About Image"
                            width={500}
                            height={400}></Image>
                    </div>
                    {/* right Side */}
                    <div className=" aboutContent">
                        <h1>Buttercream Icing</h1>
                        <p>{`This is your About section. It’s a great space to tell your story and to describe who you are and what you do. If you're a business, talk about how you started and tell the story of your professional journey. People want to know the real you, so don't be afraid to share personal anecdotes. Explain your core values and how you, your organization, or your business stand out from the crowd.`}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
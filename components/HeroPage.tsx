import Link from "next/link"
export default function HeroPage() {
    return (
        <div>
            <div className="bg">
                <div className="content">
                    <div className="content1">
                        <h1> Cake Mystery </h1>
                        <h3>We Bake with passion</h3>
                        <p>{`It's the Simple Pleasures in Life`}</p>
                    </div>
                    <div className="content2">
                        <Link href={"/menuPage"}>Order Now</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
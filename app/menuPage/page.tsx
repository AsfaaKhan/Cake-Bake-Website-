import Card from "@/components/Menu"
import Link from "next/link"
export default function Menu(){
    return(
        <div>

            {/* Content */}
            <div>
                <div className="container menu">
                    <h1 style={{textDecoration:"underline"}}>Our Menu</h1>
                    <h1>Fresh From the Oven to Your Doorstep</h1>
                     <div className="cards">
                     <Card image1="/menu/1.jpg" title1="Vanila  Cake" price1={3000} image2="/menu/2.jpg" title2="Chocolate Lava Cake" price2={4000} />

                     <Card image1="/menu/3.jpg" title1="Chocolate Vanila Cake" price1={2500} image2="/menu/7.jpg" title2="Choco Cake" price2={3500} />

                     <Card image1="/menu/4.jpg" title1="Chocolate Creamy Biscuit" price1={2500} image2="/menu/8.jpg" title2="Chocolate Stawberry Cake" price2={5000} />

                     <Card image1="/menu/9.jpg" title1="Pan Cake" price1={2500} image2="/menu/5.jpg" title2="Stawberry Cake" price2={4000} />
                     </div>
                </div>
                
                {/* Parallax */}
                <div className="bg3">
                <div className="content">
                    <div className="content1">
                        <h1> Cake Mistery </h1>
                        <h3>Customize Your Cake As Your Choice</h3>
                    </div>
                    <div className="content2">
                        <Link href={"/menuPage"}>Order Now</Link>
                    </div>
                </div>
                </div>


                <div className="container menu">
                     <div className="cards">
                     <Card image1="/menu/11.jpg" title1="Ranbow Cake" image2="/menu/12.jpg" title2="Choco Beans Cake" />

                     <Card image1="/menu/13.jpg" title1="Chocolate Cake"  image2="/menu/14.jpg" title2=" Chocolate Vanila Cup Cake"  />

                     <Card image1="/menu/15.jpg" title1="Cup Cake" image2="/menu/16.jpg" title2="BirthDay Cake" />


                     <Card image1="/menu/17.jpg" title1="Cup Cake" image2="/menu/18.jpg" title2="Celebration Cake" />
                     </div>
                </div>

            </div>


        </div>
    )
}
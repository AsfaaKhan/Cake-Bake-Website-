
import Image from "next/image"


interface ISec {
    heading:string,
    paragraph: string,
    image:string,
}

export default function SectionAbt(props:ISec) {
    <div>
        <div className=" aboutSec">
        <div className="container about1">
          {/* left Side */}
          <div className=" aboutContent">
            <h1>{props.heading}</h1>
            <p>{props.paragraph}</p>
          </div>
          
          {/* right Side */}
          <div className="aboutImg" >
            <Image src={props.image}
              alt="About Image"
              width={500}
              height={400}></Image>
          </div>
        </div>

      </div>
    </div>
}
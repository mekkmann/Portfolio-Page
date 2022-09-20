import React from "react";
import Image from "next/image";
import { Text } from "@nextui-org/react";
import { Link, Element } from "react-scroll";


const Intro = () => {
    return (
        <Element name="intro" className="section intro">
                <div className="top-cloud" >
                    <Image src="/cloud.png" alt="Image of a Cartoon Cloud" width={150} height={50} />
                </div>
                <Text h1 size={"5.625rem"} className="color-66bfbf">I&apos;m Pontus Liljekvist</Text>
                <br />
                <Text h2 size={"2.5rem"} className="color-66bfbf">Full Stack <span className="underline">Developer</span> </Text>
                <br />
                <div className="bottom-cloud">
                    <Image src="/cloud.png" alt="Image of a Cartoon Cloud" width={150} height={50} />
                </div>
                
                <Link to="aboutme" spy={true} smooth={true} >
                    <Image src="/down_icon-icons.com_61209.png" alt="Outlined arrow for navigational purposes" className="arrow" width={100} height={100} />
                </Link>
        </Element>
    );
};

export default Intro;
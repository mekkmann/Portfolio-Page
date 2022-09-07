import React from "react";
import Image from "next/image";
import { Text } from "@nextui-org/react";
import { Link, Element } from "react-scroll";

import Arrow from "./arrow";
// import "../styles/intro.css";



const Intro = () => {
    return (
        <Element name="intro">
            <div className="section intro" >
                <img class="top-cloud" src="/cloud.png" alt="Image of a Cartoon Cloud" />
                <Text h1 size={"5.625rem"} className="color-66bfbf">I'm Pontus Liljekvist</Text>
                <br />
                <Text h2 size={"2.5rem"} className="color-66bfbf">Full Stack <span className="underline">Developer</span> </Text>
                <br />
                <img class="bottom-cloud" src="/cloud.png" alt="Image of a Cartoon Cloud" />
                {/* <iframe src="https://giphy.com/embed/RbDKaczqWovIugyJmW" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> */}
                
                <Link to="aboutme" spy={true} smooth={true} >
                    <img src="/down_icon-icons.com_61209.png" alt="Outlined arrow for navigational purposes" className="arrow" />
                </Link>
            </div>
        </Element>
    );
};

export default Intro;
import React from 'react';
import { Link, Element } from 'react-scroll';
import { Text, Container } from '@nextui-org/react';
import Zoom from 'react-reveal/Zoom';
import Image from 'next/image';

const AboutMe = () => {
    return (
        <Element name="aboutme">
            <div className="section aboutme">
                <Zoom>
                    <iframe src="https://giphy.com/embed/c6oXjMBsuCWe3nEK95" width="480" height="353" frameBorder="0" className="giphy-embed" />
                    <br />
                    <Text h2 size={"2.5rem"} className="color-66bfbf">About Me</Text>
                    <br />
                    <Text b className="color-EEE6CE">I&apos;m Pontus Liljekvist and I&apos;m currently based in Stockholm, Sweden</Text>
                    <Text b className="color-EEE6CE">I (7 y/o) got into programming watching my older cousin (14 y/o) starting GameDev</Text>
                    <Text b className="color-EEE6CE">It was simple, a red dot moving around the screen</Text>
                    <Text b className="color-EEE6CE">After that, I was hooked, I knew I wanted to create</Text>
                    <Text b className="color-EEE6CE">I&apos;ll admit, I made a few detours on my way, but hey, I&apos;m a National Champion in American Football!</Text>
                    <br />
                    <Text b className="color-EEE6CE">Anyhow, this is my passion and I thank you for visiting my site</Text>
                </Zoom>
                <Link to="techskills" spy={true} smooth={true}>
                    <Image src="/down_icon-icons.com_61209.png" alt="Outlined arrow for navigational purposes" className="arrow" width={100} height={100} />
                </Link>
            </div>
        </Element>
    );
};

export default AboutMe;
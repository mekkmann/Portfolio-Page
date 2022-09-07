import React from 'react';
import { Link, Element } from 'react-scroll';
import Zoom from 'react-reveal/Zoom';
import { Text, Grid, Card } from '@nextui-org/react';
import Image from 'next/image';

const Contact = () => {
    return (
        <Element name="contact">
            <div className="section contact">
                <hr />
                <br />
                <Zoom>
                    <Text h2 size={"2.5rem"} className="color-66bfbf">Contact Me</Text>
                    <Text b className="color-EEE6CE">Hello again</Text>
                    <Text b className="color-EEE6CE">Thank you kindly for looking through the entire page</Text>
                    <Text b className="color-EEE6CE">Just click the icon below and you'll be able to send me an email</Text>
                    <br />
                    <a
                        href="mailto:alex.p.liljekvist@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image src="/gmail_icon.png" alt="Gmail Logo" height={96} width={96} className="invert" />
                    </a>
                    <br />
                    <Text b className="color-EEE6CE">All my other links are in the footer</Text>
                    <iframe src="https://giphy.com/embed/3ohs4doVZYHWaqRpwA" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>

                </Zoom>
                <Link to="intro" spy={true} smooth={true}>
                    <img src="/down_icon-icons.com_61209.png" alt="Outlined arrow for navigational purposes" className="arrow rotate180" />
                </Link>
            </div>
        </Element>
    );
};

export default Contact;
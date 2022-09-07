import Image from 'next/image';

import React from 'react';
import { Link, Element } from 'react-scroll';

const MyFooter = () => {

    return (
        <footer className="footer">
            <a
                href="https://github.com/mekkmann"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image src="/github_light.png" alt="GitHub Logo" width={32} height={32} />
            </a>
            <a
                href="https://www.linkedin.com/in/pontus-liljekvist-b7224517a/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image src="/linkedin_light.png" alt="LinkedIn Logo" width={32} height={32} />
            </a>
            <a
                href="https://twitter.com/othermekkmann"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image src="/twitter_light.png" alt="Twitter Logo" width={32} height={32} />
            </a>
        </footer>
    );
};

export default MyFooter;
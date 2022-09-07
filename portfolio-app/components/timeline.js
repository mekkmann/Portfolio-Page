import React from 'react';
import { Link, Element } from 'react-scroll';
import { Text, } from '@nextui-org/react';
import Image from 'next/image';

import Zoom from 'react-reveal/Zoom';
import Jump from "react-reveal/Jump";

import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
    return (
        <Element name="timeline">
            <div className="section timeline">
                <hr />
                <br />
                <Text h2 size={"2.5rem"} className="color-66bfbf">Timeline</Text>

                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#EEE6CE', color: '#11181C' }}
                        iconStyle={{ background: '#EEE6CE', color: '#11181C' }}
                        icon={<SchoolRoundedIcon />}
                    >
                        <Text h3 className="timelineTitle">Dr. Angela Yu&apos;s Python Bootcamp</Text>
                        <Text h4 className="timelineSubtitle">At Home</Text>
                        <Text b>
                            A 100-day course on Python. Where I got the chance to familiarize myself with programming concepts and slightly more advanced things.
                            I haven&apos;t had the time to finish it yet, but in due time I will.
                        </Text>
                        <Text>2022 - Present</Text>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#EEE6CE', color: '#11181C' }}
                        iconStyle={{ background: '#EEE6CE', color: '#11181C' }}
                        icon={<SchoolRoundedIcon />}
                    >
                        <Text h3 className="timelineTitle">.NET Full Stack Bootcamp, School of Applied Technology</Text>
                        <Text h4 className="timelineSubtitle">SALT, Stockholm</Text>
                        <Text b>
                            A 3-month high-intensity bootcamp where we learned C#, .NET, JS, ReactJS, Databases, Azure, Deployment, CI, TDD, AGILE, Mob Programming and so much more.
                            <br /> <br />
                            SALT provides an amazing opportunity to change your life, as long as you&apos;re prepared to truly give it your ALL, then this course is for you!
                            <br /> <br />
                            If this sounds interesting, <a href="https://salt.study/" target="_blank"
              rel="noopener noreferrer">apply here</a>
                            
                        </Text>
                        <Text> 05/02-22 - 08/25-22  </Text>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#EEE6CE', color: '#11181C' }}
                        iconStyle={{ background: '#EEE6CE', color: '#11181C' }}
                        icon={<WorkRoundedIcon />}
                    >
                        <Text h3 className="timelineTitle">Junior Developer, SALT</Text>
                        <Text h4 className="timelineSubtitle">SALT, Stockholm</Text>
                        <Text b>
                            After graduating from SALT&apos;s bootcamp, I began my work with them as a consultant.
                        </Text>
                        <Text> 09/01-22 - Present</Text>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#EEE6CE', color: '#11181C' }}
                        iconStyle={{ background: '#EEE6CE', color: '#11181C' }}
                        icon={<QuestionMarkRoundedIcon />}
                    >
                        <Text h3 className="timelineTitle">What does the future hold..?</Text>
                        <Text h4 className="timelineSubtitle">I&apos;m currently awaiting placement</Text>
                        <Text b>
                            Who knows, it might be your company I&apos;m working for
                            <br />
                            Don&apos;t be shy, <a href="mailto:sales@salt-sthlm.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >
                                                tell SALT you&apos;re on the hunt
                                            </a>

                        </Text>
                    </VerticalTimelineElement>

                </VerticalTimeline>

                <Link to="projects" spy={true} smooth={true}>
                    <Image src="/down_icon-icons.com_61209.png" alt="Outlined arrow for navigational purposes" className="arrow" width={100} height={100}/>
                </Link>
            </div>
        </Element>
    );
};

export default Timeline;
import React from 'react';
import { Link, Element } from 'react-scroll';
import { Text, } from '@nextui-org/react';

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
                        <Text h3 className="timelineTitle">Dr. Angela Yu's Python Bootcamp</Text>
                        <Text h4 className="timelineSubtitle">At Home</Text>
                        <Text b>
                            A 100-day course on Python. Where I got the chance to familiarize myself with programming concepts and slightly more advanced things.
                            I haven't had the time to finish it yet, but in due time I will.
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
                            SALT provides an amazing opportunity to change your life, as long as you're prepared to truly give it your ALL, then this course is for you!
                            <br /> <br />
                            If this sounds interesting, <a href="https://salt.study/">apply here</a>
                            
                        </Text>
                        <Text> - </Text>
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
                            After graduating from SALT's bootcamp, I began my work with them as a consultant.
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
                        <Text h4 className="timelineSubtitle">I'm currently awaiting placement</Text>
                        <Text b>
                            Who knows, it might be your company I'm working for
                            <br />
                            Don't be shy <a href="mailto:sales@salt-sthlm.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >
                                                tell SALT you're on the hunt
                                            </a>

                        </Text>
                    </VerticalTimelineElement>

                </VerticalTimeline>

                <Link to="projects" spy={true} smooth={true}>
                    <img src="/down_icon-icons.com_61209.png" alt="Outlined arrow for navigational purposes" className="arrow" />
                </Link>
            </div>
        </Element>
    );
};

export default Timeline;
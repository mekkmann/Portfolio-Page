import React from 'react';
import { Link, Element } from 'react-scroll';
import { Text, Grid, Card, Row, Col, Button, Container } from '@nextui-org/react'
import Zoom from 'react-reveal/Zoom';
import Image from 'next/image';
import { FabrycaCard } from './fabrycacard';
import { ODACard } from './onlinediaryappcard';
import { PortfolioCard } from './portfoliocard';

const Projects = () => {
    return (
        <Element name="projects">
            <div className="section projects">
                <hr />
                <br />
                <Zoom>
                    <Text h2 size={"2.5rem"} className="color-66bfbf">Projects</Text>
                </Zoom>
                <Zoom>
                    <Container className='width70'>
                        <Grid.Container gap={2} justify="center" className="projectGrid">
                            <Grid xs={6} >
                                <FabrycaCard />
                            </Grid>
                            <Grid xs={6} >
                                <ODACard />
                            </Grid>
                            <Grid xs={9} >
                                <PortfolioCard />
                            </Grid>
                            <Grid xs={6} >
                                <FabrycaCard />
                            </Grid>
                            <Grid xs={6} >
                                <FabrycaCard />
                            </Grid>

                        </Grid.Container>
                    </Container>

                </Zoom>
                <Link to="contact" spy={true} smooth={true}>
                    <img src="/down_icon-icons.com_61209.png" alt="Outlined arrow for navigational purposes" className="arrow" />
                </Link>
            </div>
        </Element>
    );
};

export default Projects;
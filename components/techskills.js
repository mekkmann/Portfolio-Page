import React from 'react';
import { Link, Element } from 'react-scroll';
import { Text, Container, Grid, Card } from '@nextui-org/react';
import Zoom from 'react-reveal/Zoom';
import Image from 'next/image';

const TechSkills = () => {
    return (
        <Element name="techskills">
            <div className="section techskills">
                <hr />
                <br />
                <Zoom>
                    <Text h2 size={"2.5rem"} className="color-66bfbf">Tech Skills </Text>
                </Zoom>
                <Zoom>
                <Grid.Container gap={2} justify="center" className="techGrid">
                    <Grid xs={6}>
                            <Card variant="flat" className="techCard">
                                <Card.Header>
                                    <Text h3>Languages</Text>
                                </Card.Header>
                                <Card.Divider />
                                <Card.Body>
                                    <Text b>C#</Text>
                                    <Text b>JavaScript</Text>
                                    <Text b>Python</Text>
                                </Card.Body>
                            </Card>
                    </Grid>
                    <Grid xs={6}>
                            <Card variant="flat" className="techCard">
                                <Card.Header>
                                    <Text h3>Front End</Text>
                                </Card.Header>
                                <Card.Divider />
                                <Card.Body>
                                    <Text b>ReactJS / NextJS</Text>
                                    <Text b>MaterialUI / NextUI</Text>
                                    <Text b>HTML5</Text>
                                    <Text b>CSS3</Text>
                                    <Text b>Auth0</Text>
                                    <Text b>Mocha / Jest / Cypress</Text>
                                </Card.Body>
                            </Card>
                    </Grid>
                    <Grid xs={6}>
                            <Card variant="flat" className="techCard">
                                <Card.Header>
                                    <Text h3>Back End</Text>
                                </Card.Header>
                                <Card.Divider />
                                <Card.Body>
                                    <Text b>.NET</Text>
                                    <Text b>EntityFramework</Text>
                                    <Text b>Visual Studio/VS Code</Text>
                                    <Text b>Auth0</Text>
                                    <Text b>LINQ</Text>
                                    <Text b>SQL</Text>
                                    <Text b>XUnit</Text>
                                </Card.Body>
                            </Card>
                    </Grid>
                    <Grid xs={6}>
                            <Card variant="bordered" className="techCard">
                                <Card.Header>
                                    <Text h3>Tools & Methods</Text>
                                </Card.Header>
                                <Card.Divider />
                                <Card.Body>
                                    <Text b>Git / GitHub</Text>
                                    <Text b>Swagger / Postman</Text>
                                    <Text b>Azure</Text>
                                    <Text b>Docker</Text>
                                    <Text b>Heroku</Text>
                                    <Text b>DI / MOB / AGILE / SCRUM / TDD</Text>
                                </Card.Body>
                            </Card>
                    </Grid>
                </Grid.Container>
                </Zoom>


                <Link to="timeline" spy={true} smooth={true}>
                    <Image src="/down_icon-icons.com_61209.png" alt="Outlined arrow for navigational purposes" className="arrow" width={100} height={100}/>
                </Link>
            </div>
        </Element>
    );
};

export default TechSkills;
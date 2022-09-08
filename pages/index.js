import Head from 'next/head';

// TODO: Add hamburger menu to easily jump between sections
import Intro from '../components/intro';
import TechSkills from '../components/techskills';
import Timeline from '../components/timeline';
import Projects from '../components/projects';
import Contact from '../components/contact';
import MyFooter from '../components/myfooter';
import AboutMe from '../components/aboutme';

import React from "react";


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Pontus Liljekvist: Portfolio</title>
        <meta name="description" content="Portfolio page for full stack developer Pontus Liljekvist" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Intro/>
      <AboutMe/>
      <TechSkills/>
      <Timeline/>
      <Projects/>
      <Contact/>

      <hr/>

      <MyFooter/>
    </div>
  );
};

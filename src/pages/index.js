import React from 'react';
import Link from 'gatsby-link';
import Hero from '../components/home/hero';
import Section1 from '../components/home/section1';
import Section1b from '../components/home/section1b';
import GettingStartedEasy from '../components/home/getting-started-easy';
import Features1 from '../components/home/features1';
import Features2 from '../components/home/features2';
import Ribbon from '../components/home/ribbon';

export default (props) => {
  return (
    <div>
      <Hero />
      <Section1 />
      <Section1b />
      <GettingStartedEasy />
      <Features1 />
      <Features2 />
      <Ribbon />
    </div>
  );
}

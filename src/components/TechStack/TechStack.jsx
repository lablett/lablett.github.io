import React from 'react';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const TechStack = () => (
  <Fade bottom duration={1000} delay={500} distance="30px">
    <ul className="list-inline">
      <li>
        <FontAwesomeIcon icon={['fab', 'react']} size="6x" />
      </li>
      <li>
        <FontAwesomeIcon icon={['fab', 'js-square']} size="6x" />
      </li>
      <li>
        <FontAwesomeIcon icon={['fab', 'html5']} size="6x" />
      </li>
      <li>
        <FontAwesomeIcon icon={['fab', 'css3-alt']} size="6x" />
      </li>
      <li>
        <FontAwesomeIcon icon={['fab', 'node']} size="6x" />
      </li>
      <li>
        <FontAwesomeIcon icon={['fab', 'npm']} size="6x" />
      </li>
      <li>
        <FontAwesomeIcon icon={['fab', 'java']} size="6x" />
      </li>
      <li>
        <FontAwesomeIcon icon={['fab', 'python']} size="6x" />
      </li>
      <li>
        <FontAwesomeIcon icon={['fab', 'r-project']} size="6x" />
      </li>
      <li>
        <FontAwesomeIcon icon={['fab', 'database']} size="6x" />
      </li>
      <li>
        <FontAwesomeIcon icon={['fab', 'android']} size="6x" />
      </li>
      <li>
        <FontAwesomeIcon icon={['fab', 'php']} size="6x" />
      </li>
      <li>
        <FontAwesomeIcon icon={['fab', 'git']} size="6x" />
      </li>
      <li>
        <FontAwesomeIcon icon={['fab', 'github']} size="6x" />
      </li>
    </ul>
  </Fade>
);

export default TechStack;

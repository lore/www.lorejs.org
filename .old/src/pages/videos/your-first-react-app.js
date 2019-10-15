import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Videos';
import Markdown from '../../components/Markdown';
import CodeTabs from '../../components/CodeTabs';
import CodeTab from '../../components/CodeTab';
import QuickstartBranch from '../../components/QuickstartBranch';
import Video from '../../components/Video';

export default (props) => {
  return (
    <Template>
      <h1>
        Building Your First React Application
      </h1>
      <p>
        Lore's goal is to provide a framework that makes it easy to build React applications. If you're new to React
        development, this section describes what it's like to build your first React application, and lays the foundation
        for the value proposition Lore provides to new React developers.
      </p>
      <p>
        React is pretty awesome, and the ecosystem has a lot of phenomenal libraries, but at the moment it’s really up to
        you to figure out how to piece them together into a functional application with a good client side architecture.
        The challenge with this situation is that it creates an uphill climb you need to push through before you can
        really start to feel capable of expressing your ideas as code.
      </p>
      <p>
        The video below walks through an example experience, and is intended to provide a foundation for one of
        the problems Lore is trying to help address, which is reducing the learning curve required to build large React
        applications.
      </p>
      <Video videoId="J93ZtX2sY7k" />
    </Template>
  )
};

import React from 'react';
import Template from '../../components/templates/Documentation';
import Link from 'gatsby-link';

export default (props) => {
  return (
    <Template
    title="Documentation"
    subtitle="Overview"
    description={(
      <>
        <p>
          When you create a new Lore project, you'll notice it imports and configures a number of
          packages. Some of these are the core libraries like React and Redux, while other packages
          are published under the Lore organization and begin with <code>@lore/*</code>.
        </p>
        <p>
          The <code>@lore/*</code> packages are part of the Lore ecosystem and each is designed
          to solve and different a specific application development problem. These includes things
          like detecting the current environment, generating a project config object, and generating
          Redux actions.
        </p>
        <p>
          While the packages were designed to be used together, and form the foundation for Lore,
          they're also capable of stand-alone usage. This means if you like some aspect of Lore,
          but don't want to build a project with a full "Lore setup" you can import just that package
          into your own project and configure it to replicate the behavior you want.
        </p>
        {/*<p>*/}
        {/*  When you create a new Lore project, what's generated is actually a project that imports and*/}
        {/*  configures each of those libraries. Lore has no "master" controller, and enforces no*/}
        {/*  constraints on your project. Every convention is clearly laid out in config files and*/}
        {/*  can be deleted or modified as you see fit.*/}
        {/*</p>*/}
        <p>
          This section describes what each of the <code>@lore/*</code> libraries does, and also demonstrates
          how to configure and use them.
        </p>
      </>
    )}
    >
      {[
        [
          'Installation',
          <>
            <p>
              Instructions for creating a new Lore project, which will automatically import and configure
              all libraries described in this section.
            </p>
          </>
        ],
        [
          'Modules',
          <>
            <p>
              Learn how to dynamically import files from folders in your project at build time. Real-world
              applications often have folders with dozens of files that need to be imported and configured
              in an identical way. You can skip the tedium if you import the whole folder and iterate through
              it in code.
            </p>
            <blockquote>
              Lore uses this pattern extensively to avoid having to import individual files. This is
              a common behavior in convention-driven frameworks which allows them inspect files and
              folders in order understand desired behavior.
            </blockquote>
          </>,
          '/docs/modules/'
        ],
        [
          'Environment',
          <>
            <p>
              Learn how to provide your application with a way to learn the build environment. This is
              helpful if you want your code to behave differently in different environments.
            </p>
            <blockquote>
              Lore uses this to support setting the environment using different approaches such as via
              environment variable, code, or a default value. It also provides a way to provide
              priority in case the environment is provided in multiple ways.
            </blockquote>
          </>,
          '/docs/environment/'
        ],
        [
          'Config',
          <>
            <p>
              Create a modular project config that can be overridden in different environments. This is
              helpful if you want to break your project config up into multiple files, and have different
              rules about how to combine then based on the build environment.
            </p>
            <blockquote>
              Lore uses a config folder instead of a config file. This allows you to specify defaults
              for common config values, and then override those values with environment-specific
              config settings. At build time the folder is converted into a single object according
              to rules about which values get priority.
            </blockquote>
          </>,
          '/docs/config/'
        ],
        [
          'Models',
          <>
            <p>
              Simplify REST API communication for performing CRUD operations on a resource.
            </p>
            <blockquote>
              Lore uses the Model class in @lore/backbone for managing AJAX communication. These
              docs will demonstrate how to configure a set of Models based on conventions in order
              to minimize the amount of configuration code you need to write.
            </blockquote>
          </>,
          '/docs/models/'
        ],
        [
          'Collections',
          <>
            <p>
              Simplify REST API communication for retrieving lists of resources.
            </p>
            <blockquote>
              These docs refer to the Collection class in @lore/backbone, and will require setting up
              Models first. This is because @lore/backbone intends for Collections and Models to work
              together to accommodate the full range of common AJAX requests when consuming a REST API.
            </blockquote>
          </>,
          '/docs/collections/'
        ],
        [
          'Data Structure',
          <>
            <p>
              Provide a way for your application data to be self-describing.
            </p>
            <blockquote>
              Lore maps all resources retrieved from a REST API into a structure that allows that data
              to be self-describing. This allows the data to not only include the attributes of the
              resource but also the state of the data (is it being fetched, updated, etc). In the event
              of an error, this structure will also contain error information provided by the server.
            </blockquote>
          </>,
          '/docs/data-structure/'
        ],
        [
          'Actions',
          <>
            <p>
              Auto-generate Redux action creators from blueprints.
            </p>
          </>,
          '/docs/actions/'
        ],
        [
          'Reducers',
          <>
            <p>
              Auto-generate Redux reducers from blueprints.
            </p>
          </>,
          '/docs/reducers/'
        ],
        [
          'Store',
          <>
            <p>
              Set up the Redux store.
            </p>
          </>,
          '/docs/store/'
        ],
        [
          'Bind Actions',
          <>
            <p>
              Simplify action creator invocation by binding them to the Redux store.
            </p>
          </>,
          '/docs/bind-actions/'
        ],
        [
          'Initializers',
          <>
            <p>
              Provide application with a way to run custom logic before mounting.
            </p>
          </>,
          '/docs/initializers/'
        ]
      ].map(function(value, index) {
        return (
          <React.Fragment key={index}>
            <h2 style={{ marginTop: index > 0 ? '4rem' : '' }}>
              {value[0]}
            </h2>
            {value[1]}
            {value[2] && (
              <Link
                className="inline-block bg-lore-gradient-x text-center px-8 py-3 mt-4 rounded-full text-white hover:text-gray-300 shadow uppercase no-underline text-sm font-bold"
                style={{ textDecoration: 'none', backgroundColor: '#355c7d' }}
                to={value[2]}
              >
                Learn more
              </Link>
            )}
            {/*{value[2] && (*/}
            {/*  <Link*/}
            {/*    className=""*/}
            {/*    to={value[2]}*/}
            {/*  >*/}
            {/*    Learn more*/}
            {/*  </Link>*/}
            {/*)}*/}
          </React.Fragment>
        )
      })}
    </Template>
  )
};

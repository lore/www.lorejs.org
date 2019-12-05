import React from 'react';
import Link from 'gatsby-link';
import LoreLogo from '../../assets/images/logos/logo.png';
import LoreLogoText from '../../assets/images/logos/lore_logo_text.png';
import GithubIcon from '../GithubIcon';
import TwitterIcon from '../TwitterIcon';
import ReactLogo from '../../assets/images/logos/react-logo.png';
import ReduxLogo from '../../assets/images/logos/redux-logo.png';
import WebpackLogo from '../../assets/images/logos/webpack-logo.png';
import ReactRouterLogo from '../../assets/images/logos/react-router-logo.png';
import TailwindLogo from '../../assets/images/logos/tailwind-logo.png';
import NowLogo from '../../assets/images/logos/zeit-logo.png';
import EmptyPackagesImage from '../../assets/images/home-v2/empty-packages.png';
import ModularConfigurationImage from '../../assets/images/home-v2/modular-configuration.png';
import WebsiteImage from '../../assets/images/home-v2/website.png';
import PersonShrugImage from '../../assets/images/home-v2/person-shrug.png';
import WreckingBallImage from '../../assets/images/home-v2/wrecking-ball.png';
import TutorialImage from '../../assets/images/quickstart/lore-tutorial-twitter.png';

function Package(props) {
  const {
    logo=ReactLogo,
    purpose='View',
    name='React',
    size=56
  } = props;

  return (
    <div className="flex flex-col">
      <div className="shadow bg-white rounded-full h-20 w-20 relative mb-3 mx-12">
        <img className="absolute top-0 bottom-0 left-0 right-0 m-auto" style={{ width: `${size}px` }} src={logo} />
      </div>
      <div className="font-semibold text-sm uppercase text-center leading-normal" style={{ color: '#777777' }}>
        {purpose}
      </div>
      <div className="font-bold text-center" style={{ color: '#333333' }}>
        {name}
      </div>
    </div>
  );
}

function PackageValue(props) {
  const {
    logo=ReactLogo,
    purpose='View',
    name='React',
    size=56,
    children
  } = props;

  return (
    <div className="flex w-1/3 px-5 py-5">
      <div className="shadow bg-white rounded-full h-20 w-20 relative mr-5">
        <img className="absolute top-0 bottom-0 left-0 right-0 m-auto" style={{ width: `${size}px` }} src={logo} />
      </div>
      <div className="flex flex-col flex-1">
        <div className="font-semibold text-sm uppercase leading-normal" style={{ color: '#777777' }}>
          {purpose}
        </div>
        <div className="font-bold" style={{ color: '#333333' }}>
          {name}
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}

function PictureSection(props) {
  const {
    title='Title',
    image=ReactLogo,
    reversed=false,
    children,
    className,
    imageClassName
  } = props;

  return (
    <div className={`flex ${className}`}>
      {!!reversed && (
        <div className="w-1/2 px-20">
          <img className={`w-full ${imageClassName}`} src={image}/>
        </div>
      )}
      <div className="w-1/2 px-8 self-center">
        <h2 className="block text-2xl font-black mb-5">
          {title}
        </h2>
        {typeof children === 'string' ? (
          <p>
            {children}
          </p>
        ) : children}
      </div>
      {!reversed && (
        <div className="w-1/2 px-20">
          <img className={`w-full ${imageClassName}`} src={image}/>
        </div>
      )}
    </div>
  );
}

function PatternSection(props) {
  const {
    title='',
    description='',
    patterns=[]
  } = props;

  return (
    <div>
      <div className="mb-32">
        <h2 className="block text-2xl font-black mb-2 text-center">
          {title}
        </h2>
        <div className="bg-gray-900 h-1 w-12 mx-auto mb-3" />
        <div className="max-w-lg markdown text-center mx-auto">
          <p>
            {description}
          </p>
        </div>
      </div>
      {patterns.map(function(pattern, index) {
        return (
          <PictureSection
            key={index}
            className="mb-12"
            title={pattern.title}
            image={pattern.image}
            reversed={index % 2}
          >
            {pattern.description}
          </PictureSection>
        );
      })}
    </div>
  );
}

export default (props) => {
  return (
    <div style={{ color: '#333' }}>
      <div id="header" className="flex bg-white border-b border-gray-200 top-0 inset-x-0 z-100 items-center">
        <div className="w-full max-w-screen-lg relative mx-auto px-6">
          <div className="flex items-center -mx-6 h-16">
            <div className="lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8">
              <div className="flex items-center">
                <a href="/" className="block lg:mr-4">
                  <div className="flex">
                    <img className="h-8 my-auto mr-1" style={{ marginTop: '-2px' }} src={LoreLogo} />
                    <img className="h-8 m-auto" src={LoreLogoText} />
                  </div>
                </a>
              </div>
            </div>
            <div className="flex flex-grow lg:w-3/4 xl:w-4/5">
              <div className="w-full lg:px-6 xl:w-3/4 xl:px-12"/>
              <div className="hidden lg:flex lg:items-center lg:justify-between xl:w-1/4 px-6">
                <div className="flex justify-end w-full items-center text-gray-500">
                  <Link className="block hover:text-gray-100 text-gray-400 mr-5 font-bold text" to="/docs/">
                    Docs
                  </Link>
                  <Link className="block hover:text-gray-100 text-gray-400 mr-5 font-bold text" to="/quickstart/">
                    Quickstart
                  </Link>
                  <a className="block flex items-center hover:text-gray-100 text-gray-400 mr-5" href="https://github.com/lore/lore">
                    <GithubIcon />
                  </a>
                  <a className="block flex items-center hover:text-gray-100 text-gray-400 mr-5" href="https://twitter.com/loreframework">
                    <TwitterIcon/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-4xl text-white font-black mb-6 mt-24 max-w-4xl">
              A convention-driven framework for building browser-based React applications.
            </h1>
            <h2 className="text-2xl text-white mb-24">
              Keep what you like. Swap out the rest.
            </h2>
          </div>
        </div>
      </div>
      <div className="bg-gray-100x py-12" style={{ backgroundColor: 'rgba(216, 216, 216, 0.2)'}}>
        <div className="w-full max-w-screen-lg mx-auto flex justify-center">
          <Package logo={ReactLogo} purpose="View" name="React" />
          <Package logo={ReduxLogo} purpose="Data Flow" name="Redux" />
          <Package logo={WebpackLogo} purpose="Build" name="webpack" />
          <Package logo={ReactRouterLogo} purpose="Routing" name="React Router" />
          <Package logo={TailwindLogo} purpose="Styling" name="TailwindCSS" />
          <Package logo={NowLogo} size={40} purpose="Publishing" name="Now" />
        </div>
      </div>
      <div className="py-20">
        <div className="w-full max-w-screen-lg mx-auto">
          <PictureSection
            title="Building web applications is hard."
            image={WebsiteImage}
          >
            There are a lot of decisions to make. The early ones include researching and selecting
            a set of libraries to build your project, visualize it, style it, handle routing,
            communicate with servers, cache your data, and eventually choosing a service to publish
            your application to.
          </PictureSection>
        </div>
      </div>
      <div className="py-20" style={{ backgroundColor: '#355C7D' }}>
        <div className="w-full max-w-screen-lg mx-auto">
          <h2 className="block text-2xl font-black text-white mb-5 text-center mb-8">
            Don't make it harder than it needs to be.
          </h2>
          <div className="w-7/12 markdown text-white text-center mx-auto">
            <p>
              There are a lot of decisions to make. The early ones include researching and selecting
              a set of libraries to build your project, visualize it, style it, handle routing,
              communicate with servers, cache your data, and eventually choosing a service to publish
              your application to.
            </p>
          </div>
        </div>
      </div>
      <div className="py-20">
        <div className="w-full max-w-screen-lg mx-auto">
          <h2 className="block text-2xl font-black mb-5 text-center">
            Curated libraries with flexible configurations.
          </h2>
          <div className="max-w-lg markdown text-center mx-auto">
            <p>
              Bootstrapping a new web application can be tedious. Even when you like the libraries
              you’re using, it can be time-consuming to find patterns for using them that feel
              simple and flexible. That feeling that resonates inside you that says “Oh, this, I
              like this”.
            </p>
          </div>
          <div className="flex flex-wrap -mx-5 -my-5 mt-20">
            <PackageValue logo={ReactLogo} purpose="View" name="React">
              All of Lore’s custom packages are designed around modern React features like
              Context and Hooks, and the default project template is configured to automatically
              update your application whenever data in the Redux store changes.
            </PackageValue>
            <PackageValue logo={ReduxLogo} purpose="Data Flow" name="Redux">
              Lore uses a mix of of conventions and overridable blueprints to remove the need to
              write reducers or action creators for standard CRUD operations. It also provides a
              hook that allows components to declare what data they need, and prevents duplicate
              network requests.
            </PackageValue>
            <PackageValue logo={WebpackLogo} purpose="Build" name="webpack">
              Instead of juggling multiple webpack configs, Lore uses a pattern that allows a single
              config to support multiple build configurations. It includes sensible defaults for
              development and production, and common loaders are pre-installed to make getting started
              a breeze.
            </PackageValue>
            <PackageValue logo={ReactRouterLogo} purpose="Routing" name="React Router">
              Application routes are clearly exposed in a single file at the root of the project.
              A custom route component is also provided that makes it easy to prevent access to
              any routes that require authentication and redirect the user elsewhere.
            </PackageValue>
            <PackageValue logo={TailwindLogo} purpose="Styling" name="TailwindCSS">
              Tailwind is a brilliant utility-first CSS library that practically eliminates any
              need to write custom CSS. It might seem verbose at first, but give it a chance and
              you may fall in love with the flexibility, clarity, and overall boost to productivity.
            </PackageValue>
            <PackageValue logo={NowLogo} size={40} purpose="Publishing" name="Now">
              The project template includes a config for publishing to Now, a static hosting
              provider that provides free SSL certs, zero-downtime deploys, and a phenomenal
              developer experience.
            </PackageValue>
          </div>
        </div>
      </div>
      <div className="py-20 bg-lore-gradient clip-path-bottom-left">
        <div className="w-full max-w-screen-lg mx-auto">
          <h2 className="block text-2xl font-black text-white mb-5 text-center mb-8">
            Patterns that support real-world applications.
          </h2>
          <div className="w-7/12 markdown text-white text-center mx-auto">
            <p>
              There are a lot of decisions to make. The early ones include researching and selecting
              a set of libraries to build your project, visualize it, style it, handle routing,
              communicate with servers, cache your data, and eventually choosing a service to publish
              your application to.
            </p>
          </div>
        </div>
      </div>
      <div className="py-20">
        <div className="w-full max-w-screen-lg mx-auto">
          <PatternSection
            title="Data Driven"
            description={`
              React applications are much simpler to build when the data being visualized is
              self-describing. Imagine if you could inspect data and easily know the context,
              such as whether that resource was being fetched, incurred an error while being
              created, or what query the data represents. All data in Lore is wrapped in a simple
              structure that makes it easy to understand those types of things.
            `}
            patterns={[
              {
                title: 'Data (resource)',
                image: WebsiteImage,
                description: (`
                  All individual resources are wrapped in this data structure. In addition to standard
                  fields like the resource id and data, Lore also includes a client-side id (to support
                  optimistic behavior), a state attribute (to know if the resource is being created,
                  deleted, etc), and an error field (which will include whatever data the server error
                  provided if one occurs).
                `)
              },
              {
                title: 'Data (query)',
                image: WebsiteImage,
                description: (`
                  Any data that reflects a server query is wrapped in this structure. The state will
                  reflect whether the query is being fetched or has been resolved, while the query
                   attribute reflects the query parameters sent to the server, and the meta field reflects
                   metadata information such as pagination.
                `)
              }
            ]}
          />
          <hr className="my-24 transform-rotate-left"/>
          <PatternSection
            title="No Boilerplate"
            description={`
              Code in web applications can be roughly split into two categories; code that visualizes
              data, and code that operates on data (fetching, updating, etc). In practice the code that
              communicates with servers to operate on data can be extremely repetitive to write, and
              have so much similarity that it feels like writing boilerplate (code that you generate
              by coping other code and making small modifications). If not managed carefully, these
              boilerplate files can easily mount into dozens or even hundreds, but with some thoughtful
              patterns, you can eliminate most of that code entirely. See how Lore addresses this below.
            `}
            patterns={[
              {
                title: 'Action Creator Blueprints',
                image: WebsiteImage,
                description: (`
                  Servers that expose a REST API often follow conventions that make their behavior
                  easy to predict, such as naming endpoints after resources and using the http request
                  method to determine the action (create, update, delete, etc). While normally a huge
                  source of boilerplate code, with some thoughtful patterns you can take advantage of
                  those conventions in order to create blueprints capable of generating action creators
                  for you. Curious? See how Lore does it.
                `)
              },
              {
                title: 'Reducer Blueprints',
                image: WebsiteImage,
                description: (`
                  Reducers are often used to cache application data, and make it accessible to the
                  application via the store. Unfortunately, this is often another huge source of
                  boilerplate, as the reducers often reflect the names of resources, and expose
                  common ways to accessing data (such as by id and by query). But once again, with
                  some thoughtful patterns, you can advantage of those conventions in order to create
                  blueprints capable of generating reducers for you—reducers designed to work with
                  the actions creators. See how Lore does it.
                `)
              },
              {
                title: 'Auto-generation via Conventions',
                image: WebsiteImage,
                description: (`
                  While blueprint functions can be used to eliminate the need to write custom files,
                  by generating in-memory action creators and reducers, by themselves you still have
                  to write the code to invoke the functions. While you could do this yourself (via
                  configuration) it’s also possible to use conventions to create them for you. Lore
                  defaults to that behavior, and uses a pattern where the act of creating a file
                  named “tweet” will automatically create a full set of actions creators and reducers
                  capable of performing CRUD operations on tweets as well as caching all of the data.
                `)
              }
            ]}
          />
          <hr className="my-24 transform-rotate-right"/>
          <PatternSection
            title="Optimistic"
            description={`
              Optimistic updating is a pattern where changes to data (especially data created by the
              user) are visualized before the server has confirmed the action. While the pattern can
              be tricky to implement, as it requires the ability to correlate and merge fake data with
              real data returned from the server in the future, using it can drastically remove the
              visual effects of server latency and makes your application feel more responsive to users.
              Lore was designed around this pattern, and the benefits show in the ways listed below.
            `}
            patterns={[
              {
                title: 'Visual Cues',
                image: WebsiteImage,
                description: (`
                  Useful for providing the user with a visual indication that some action is being
                  performed but has no yet completed. Examples include fetching, updating and
                  creating data.
                `)
              },
              {
                title: 'Error Handling',
                image: WebsiteImage,
                description: (`
                  Server errors are passed to components and clearly communicated. Useful for informing
                  the user when things don't go as planned and providing them with the ability to correct
                  the error and try again.
                `)
              },
              {
                title: '404 Pages',
                image: WebsiteImage,
                description: (`
                  Discover and communicate when resources can't be found. Useful for providing the user
                  with a clear indication that what they're looking for does not exist, as infinite
                  loaders and blank pages are both poor user experiences.
                `)
              }
            ]}
          />
          <hr className="my-24 transform-rotate-right"/>
          <PatternSection
            title="Efficient Networking (No Duplicate Requests)"
            description={`
              One of the challenges in web applications is preventing duplicate network requests for
              the same data. For example, if multiple components need to visualize the same user, how
              do you prevent them from initiating duplicate network requests? Ideally you want to to
              return the user if you already have it, or fetch it if you don’t have it.
            `}
            patterns={[
              {
                title: 'Connect Hook',
                image: WebsiteImage,
                description: (`
                  Lore provides a hook called connect that is designed to fetch data from the local
                  cache if it exists, or automatically fetch it from the API if it doesn't. It can
                  even tell if data is already (currently) being fetched in order to guarantee that
                  there’s never more than a single network request for the same data. Preventing duplicate
                  requests not only reduces server load, but makes sure the data you actually need is
                  being prioritized and retrieved as quickly as possible.
                `)
              }
            ]}
          />
          <hr className="my-24 transform-rotate-right"/>
          <PatternSection
            title="Real-time Support"
            description={`
              Provides the ability for an application's data to update without requiring the user
              to refresh the page. Especially useful in applications where multiple people view and
              interact with the same data, especially when data changes at a high frequency, or for
              certain classes of problems that need status checks to see when they’re completed
              (queuing a task to send an email, spinning up a server, etc)
            `}
            patterns={[
              {
                title: 'Polling',
                image: WebsiteImage,
                description: (`
                  Polling is a pattern where data is refetched on a set interval, like every 5
                  seconds, with the intention of checking to see if it’s changed. While this
                  approach only works for small applications or in limited scope, due to browsers
                  limiting the number of concurrent network requests, it still has its place, and
                  is a strategy that can be used with any server. Lore provides a component that
                  makes it easy to specify which resource you want polled, and is easy to start and
                  stop.
                `)
              },
              {
                title: 'Websockets (beta)',
                image: WebsiteImage,
                description: (`
                  Websockets are a protocol that allow a client application to subscribe to data,
                  and the server will push new data to the client. Applications that have a high
                  real-time expectation (like chat applications) are largely to be using this approach.
                  Provides the ability for an application's data to update without requiring the user
                  to refresh the page. Especially useful in applications where multiple people view
                  and interact with the same data, especially when data changes at a high frequency.
                  Lore provides a package that integrates seamlessly with existing actions and reducer
                  patterns, though it hasn’t been used in production. It’s more a proof of concept that
                  likely has some blind spots : )
                `)
              }
            ]}
          />
        </div>
      </div>
      <div className="py-32 bg-lore-gradient clip-path-top-left" />
      <div className="py-20">
        <div className="w-full max-w-screen-lg mx-auto">
          <h2 className="block text-2xl font-black mb-5 text-center">
            <div>Modular configuration.</div>
            <div>You're in control.</div>
          </h2>
          <div className="max-w-lg markdown text-center mx-auto mb-16">
            <p>
              Bootstrapping a new web application can feel tedious and overwhelming. Lore is designed
              around a curated set of popular libraries that work well together. Each library is also
              preconfigured to solve common application needs.
            </p>
          </div>
          <div>
            <img className="w-7/12 mx-auto" src={ModularConfigurationImage}/>
          </div>
        </div>
      </div>
      <div className="py-20 bg-lore-gradient text-white">
        <div className="w-full max-w-screen-lg mx-auto">
          <div className="flex">
            <div className="w-1/2 px-8 self-center">
              <h2 className="block text-2xl font-black mb-5">
                Tired of overly simplistic example apps?
              </h2>
              <p className="mb-4">
                So are we. The problem with typical “hello world” or “todo list” example apps is
                they don’t take application concerns seriously. Patterns that work for small applications
                don’t necessarily scale up to larger applications that need to communicate with 40+
                endpoints across multiple APIs, display changes optimistically, or support polling or
                websocket integration to display changes in real-time across browsers.
              </p>
              <p>
                Lore takes these concerns seriously (tackles head on?). If you want to see just
                how seriously, check out the Quickstart, which is Lore’s version of a “hello world”
                app. You may find it’s much more serious than what you’re used to seeing.
              </p>
            </div>
            <div className="w-1/2 px-8 self-center">
              <img className="w-full shadow-2xl rounded overflow-hidden" src={TutorialImage}/>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20">
        <div className="w-full max-w-screen-lg mx-auto">
          <h2 className="block text-2xl font-black mb-5 text-center">
            But...aren't frameworks bad?
          </h2>
          <div className="max-w-2xl markdown text-center mx-auto mb-16">
            <p>
              If you’ve heard this before it was likely in a blog post or talk along the lines
              of “libraries vs frameworks”, discussing the merits and evils about how libraries
              should strive to be unopinionated and extensible, and frameworks do nothing but lock
              you in, limit your career growth, and eventually limit your application.
            </p>
          </div>
          <div className="mb-16">
            <h2 className="block text-2xl font-black mb-2">
              Complaint #1
            </h2>
            <div className="bg-gray-900 h-1 w-12 mb-12" />
            <div className="flex">
              <div className="w-1/2 pr-8 flex">
                <div className="rounded-full w-16 h-16 overflow-hidden shadow mr-4">
                  <img className="w=full" src={PersonShrugImage}/>
                </div>
                <div className="flex-1 markdown">
                  <p>
                    "I’ve heard learning frameworks is bad because you end up learning the framework
                    but not the underlying tools."
                  </p>
                </div>
              </div>
              <div className="w-1/2 pr-8">
                <div className="shadow rounded-lg p-4 -mt-4">
                  A critical ability for any browser-based web application is communicating with one
                  or more servers, and it’s not uncommon for applications to need to communicate with
                  dozens of endpoints. If not managed carefully, this can easily erupt into hundreds
                  of files that are very similar, and can be a nightmare to manage and a source of errors
                  due to small unintentional differences. Do you know how to manage the mess and eliminate
                  the potential for copy/paste errors?
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="block text-2xl font-black mb-2">
              Complaint #2
            </h2>
            <div className="bg-gray-900 h-1 w-12 mb-12" />
            <div className="flex">
              <div className="w-1/2 pr-8 flex">
                <div className="rounded-full w-16 h-16 overflow-hidden shadow mr-4">
                  <img className="w=full" src={WreckingBallImage}/>
                </div>
                <div className="flex-1 markdown">
                  <p>
                    "I’ve heard learning frameworks is bad because you end up learning the framework
                    but not the underlying tools."
                  </p>
                </div>
              </div>
              <div className="w-1/2 pr-8">
                <div className="shadow rounded-lg p-4 -mt-4">
                  A critical ability for any browser-based web application is communicating with one
                  or more servers, and it’s not uncommon for applications to need to communicate with
                  dozens of endpoints. If not managed carefully, this can easily erupt into hundreds
                  of files that are very similar, and can be a nightmare to manage and a source of errors
                  due to small unintentional differences. Do you know how to manage the mess and eliminate
                  the potential for copy/paste errors?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-32" style={{ backgroundColor: 'rgba(53, 92, 125)' }} />
    </div>
  );
}

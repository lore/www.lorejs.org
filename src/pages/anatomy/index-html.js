import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Anatomy';
import Code from '../../components/Code';

export default (props) => {
  return (
    <Template>
      <h1>
        index.html
      </h1>
      <p>
        This is the HTML file that gets served to the browser.
      </p>

      <h3>
        Defaults
      </h3>
      <p>
        The file included with new projects by default has inline comments, but the stripped down version
        looks like this:
      </p>
      <Code text={`
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Lore Quickstart</title>
          <!-- 1. Favicons -->
          <!-- 2. Styles -->
        </head>
        <body>
          <!-- 4. Root -->
          <div id="root"></div>

          <!-- 5. Dialog -->
          <div id="dialog"></div>

          <!-- 6. Splash Screen -->
          <div id="splash-screen"></div>

          <!-- 3. JavaScript Bundles -->
        </body>
      </html>
      `}/>

      <p>
        The commented sections will be discussed in the numbered sections below.
      </p>

      <h3>
        What's the default behavior?
      </h3>
      <p>
        The default behavior is such that the browser will display a splash screen with a "breathing logo" as soon
        as the <code>index.html</code> file is loaded, and that splash screen will fade away as soon as the JavaScript
        bundles have been downloaded and <code>lore.summon()</code> has finished building and mounting the application.
      </p>

      <h3>
        Why include inlined styles in this file?
      </h3>
      <p>
        Good question! The short answer is "to provide a pretty splash screen", and the longer answer is "...but
        you don't really need it".
      </p>
      <p>
        When a new project loads, you'll notice there's a splash screen that fades away into the real application.
        The styles that enable this are in two places; first, here in the index.html document, but you'll <em>also</em>
        see them in the <code>assets/css/main.css</code> file.
      </p>
      <p>
        The reason the styles are listed in two places is so you can <em>see the effect during development</em>. Lore
        uses Webpack to load styles (e.g. <code>import "../assets/css/main.css"</code>), and when building for
        production, these styles are all extracted into a single <code>styles.css</code> file that is loaded
        in the <code>{`<head>`}</code> of the document.
      </p>
      <p>
        But during <em>development</em>, these styles aren't extracted into separate file. In fact, they aren't
        loaded at all until the JavaScript loads, which means you won't see a splash screen at all. And the
        splash screen is pretty, so we can't have that.
      </p>
      <p>
        So to answer your question - the inlined styles are <em>only neccesary</em> if you want to view the splash
        screen during development. But if you remove them, and built the application for production, you would
        see the splash screen just fine.
      </p>
      <p>
        So feel free to remove them! They exist so anyone creating a new project will see the effect.
      </p>

      <h3>
        1. Favicons
      </h3>
      <p>
        Webpack will automatically convert the high-resolution image saved to <code>assets/images/favicon.png</code> into
        a series of favicons for various devices like the browser, android, apple, windows, etc.
      </p>
      <p>
        By default, only the favicons for the browser are generated, but you can change that by modifying
        the settings for the <code>FaviconsWebpackPlugin</code> in the webpack config. The generated favicons
        all contain a unique hash in the URL to facilitate cache busting, and will look like this:
      </p>

      <Code text={`
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons-[hash]/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons-[hash]/favicon-16x16.png">
      <link rel="shortcut icon" href="/favicons-[hash]/favicon.ico">
      `}/>

      <p>
        If you'd like to take full control over favicon generation process, or learn more about why favicon
        generation can be challenging, the <a href="http://realfavicongenerator.net/faq">Real Favicon
        Generator website</a> is a great resource.
      </p>

      <h3>
        2. Styles
      </h3>
      <p>
        Webpack will automatically inject styles into the header, and they will be placed below this comment.
      </p>
      <p>
        During development, this happens once the JavaScript bundles have been loaded, and they will be included
        inline, like this:
      </p>

      <Code text={`
      <style>
        ... your styles ...
      </style>
      `}/>

      <p>
        In production, the ExtractTextPlugin in the webpack config will extract all styles and place them
        in a file called styles.main.css, which will be included like this:
      </p>

      <Code text={`
      <link href="/styles.main.css" rel="stylesheet">
      `}/>

      <p>
        To facilitate cache busting, this file will also contain a unique hash, to prevent browsers from
        using old styles once they've been updated. The final production file will look something like this:
      </p>

      <Code text={`
      <link href="/styles.main.bb904647341499c464e6.css" rel="stylesheet">
      `}/>

      <h3>
        3. JavaScript Bundles
      </h3>
      <p>
        Webpack will place your JavaScript bundles below this comment.
      </p>
      <p>
        The number of bundles your project has can have a large impact on your first page load time,
        since it takes longer to load one single large bundle (with all your code inside) compared to
        loading multiple smaller bundles that can be fetched in parallel.
      </p>
      <p>
        New Lore projects include two bundles by default. The first is called <strong>main</strong> and includes
        the Lore core and your custom project files. The second is called <strong>vendor</strong> and includes
        vendor libraries like React, React DOM, and React Router.
      </p>
      <p>
        To further optimize the first page load time of your application, you are encouraged to add more
        libraries to the vendor bundle, or to create new bundles as needed.
      </p>
      <p>
        In development, the bundles will be included like this:
      </p>

      <Code text={`
      <script type="text/javascript" src="/bundle.vendor.js"></script>
      <script type="text/javascript" src="/bundle.main.js"></script>
      `}/>

      <p>
        In production, in order to facilitate cache busting, these files will also contain a unique hash,
        to prevent browsers from using old files once they've been updated. The final production files will
        look something like this:
      </p>

      <Code text={`
      <script type="text/javascript" src="/bundle.vendor.bbf77f84f00fd43296cb.js"></script>
      <script type="text/javascript" src="/bundle.main.bb904647341499c464e6.js"></script>
      `}/>

      <h3>
        4. Root
      </h3>
      <p>
        This is the DOM element where the application will be rendered (the mounting point for ReactDOM).
      </p>

      <h3>
        5. Dialog
      </h3>
      <p>
        This DOM element is intended to be used for mounting dialogs. This is reccomended for the following reasons:
      </p>
      <ul className="list-disc pl-10">
        <li>
          Mounting a dialog <em>within</em> the <code>root</code> DOM element makes it susceptible to the
          CSS cascade, which means the styling of the dialog could be affected based where it's mounted in the DOM.
        </li>
        <li>
          It also means that components higher in the DOM have the ability to cancel event bubbling, which could
          lead to typing and click events within the dialog not behaving as expected.
        </li>
      </ul>

      <h3>
        6. Splash Screen
      </h3>
      <p>
        This DOM element is intended to be used to render a splash screen (a way of providing an experience to the
        user while the JavaScript bundles are being loaded).
      </p>

      <h3>
        Example
      </h3>
      <p>
        A production build of the application will look something like this:
      </p>

      <Code text={`
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Lore Quickstart</title>

          <!-- 1. Favicons -->
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons-6dfcffec256e1e0e983385526b6c97ff/favicon-32x32.png">
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons-6dfcffec256e1e0e983385526b6c97ff/favicon-16x16.png">
          <link rel="shortcut icon" href="/favicons-6dfcffec256e1e0e983385526b6c97ff/favicon.ico"

          <!-- 2. Styles -->
          <link href="/styles.main.bb904647341499c464e6.css" rel="stylesheet">

        </head>
        <body>
          <div id="root"></div>
          <div id="dialog"></div>
          <div id="splash-screen"></div>

          <!-- 3. JavaScript Bundles -->
          <script type="text/javascript" src="/bundle.vendor.bbf77f84f00fd43296cb.js"></script>
          <script type="text/javascript" src="/bundle.main.bb904647341499c464e6.js"></script>
        </body>
      </html>
      `}/>
    </Template>
  );
};

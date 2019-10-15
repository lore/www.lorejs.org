import React from "react";

// <link href='https://fonts.googleapis.com/css?family=Lora:400,400italic|Work+Sans:300,400,500,600' rel='stylesheet'>

let stylesStr;
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

export default class HTML extends React.Component {
  render() {
    let css;
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>Lore | Convention-driven Framework for React</title>

          {/* Fonts */}
          <link href="https://fonts.googleapis.com/css?family=Lora:400,400italic|Work+Sans:300,400,500,600" rel="stylesheet" />

          {/* Twitter Card data */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Lore" />
          <meta name="twitter:description" content="Convention-driven framework for React. Built on Webpack, Redux and React Router." />
          <meta name="twitter:creator" content="@loreframework" />
          <meta name="twitter:image:src" content="http://www.lorejs.org/assets/images/social/lore-social-image.jpg" />

          {/* Open Graph data */}
          <meta property="og:title" content="Lore" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://www.lorejs.org/" />
          <meta property="og:image" content="http://www.lorejs.org/assets/images/social/lore-social-image-large.jpg" />
          <meta property="og:description" content="Convention-driven framework for React. Built on Webpack, Redux and React Router." />
          <meta property="og:site_name" content="Lore" />
          <meta name="viewport" content="width=device-width" />

          {/* Schema.org markup for Google+ */}
          <meta itemProp="name" content="Lore" />
          <meta itemProp="description" content="Convention-driven framework for React. Built on Webpack, Redux and React Router." />
          <meta itemProp="image" content="http://www.lorejs.org/assets/images/social/lore-social-image-large.jpg" />

          {/* Favicons */}
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#4b6793"/>
          <meta name="msapplication-TileColor" content="#4b6793"/>
          <meta name="theme-color" content="#ffffff"/>

          {/* Other */}
          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script src="/assets/js/jquery.min.js" />
          <script src="/assets/js/toolkit.js" />
          <script src="https://cdn.rawgit.com/mike-zarandona/PrettyEmbed.js/master/jquery.prettyembed.min.js" />
          <script src="/assets/js/signup-forms.js" />
        </body>
      </html>
    )
  }
};

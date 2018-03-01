import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/layout/step-2.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 2: Add Custom Styles
      </h1>
      <p>
        In this step we're going to add some custom styles that we'll need for the Quickstart.
      </p>

      <QuickstartBranch branch="layout.2" />

      <h3>
        Assets Folder
      </h3>

      <p>
        Lore includes support for CSS, LESS and SASS by default. If you open up the <code>/assets</code> folder at
        the root of your project you'll see a folder named for each style.
      </p>

      <Markdown type="sh" text={`
      -assets
        |-css
        |-less
        |-sass
      `}/>

      <p>
        For this Quickstart, we're going to be using vanilla CSS.
      </p>

      <blockquote>
        <p>
          In a real project, you can simply delete the folders of the styles you don't want to use, or use inline
          styles or your favorite JSS library (JavaScript Style Sheets). Lore has no opinions about how you style
          your application, it simply includes Webpack loaders for LESS and SASS by default.
        </p>
        <p>
          You can learn more about the <code>/assets</code> folder <Link to="/anatomy/assets/">here</Link>.
        </p>
      </blockquote>

      <h3>
        Add Custom Styles
      </h3>

      <p>
        Open <code>/assets/css/main.css</code>. Delete the existing styles and replace them with this code:
      </p>

      <Markdown type="css" text={`
      /*
       * Create Tweet Button
       */

      .create-button {
        position: absolute;
        top: 25px;
        right: 15px;
        z-index: 1000;
        border-radius: 100px;
      }

      .create-button:focus {
        outline: none !important;
      }

      /*
       * Edit and Delete Links
       */

      .link {
        cursor: pointer;
        margin-right: 16px;
      }

      /*
       * Feed
       */

      .feed .title {
        text-align: center;
      }

      .feed .tweets {
        margin-top: 32px;
      }

      .feed .pagination {
        text-align: center;
      }

      .feed nav {
        text-align: center;
      }

      .feed .transition {
        opacity: 0.5;
      }

      /*
       * Filter
       */

      .filter {
        margin-top: 20px;
      }


      /*
       * Header
       */

      .header .container {
        position: relative;
      }

      /*
       * Footer
       */

      .footer {
        text-align: center;
        margin-top: 32px;
        margin-bottom: 64px;
        min-height: 60px;
      }

      .footer button:focus {
        outline: none !important;
      }

      .footer .btn {
        margin-top: 7px;
        margin-bottom: 7px;
      }

      /*
       * Profile
       */

      .profile {
        position: relative;
        display: block;
        margin-bottom: .75rem;
        background-color: #fff;
        border-radius: .25rem;
        border: 1px solid rgba(0,0,0,.125);
        margin-top: 20px;
      }

      .profile .card-block {
        padding: 1.25rem
      }

      .profile .avatar {
        width: 48px;
        position: absolute;
        top: -24px;
        left: calc(50% - 24px);
        border: 1px solid gray
      }

      .profile .permissions {
        margin-left: -12px;
      }

      /*
       * Tweet
       */

      .tweet .avatar {
        width: 32px;
        border: 1px solid gray
      }

      .tweet .image-container {
        display: inline-block;
        vertical-align: top;
        width: 32px
      }

      .tweet .content-container {
        display: inline-block;
        margin-left: 8px;
        max-width: 85%
      }

      .tweet .title {
        line-height: 32px;
        display: inline-block
      }

      .tweet .text {
        margin-bottom: 5px
      }

      .tweet .timestamp {
        display: inline-block;
        margin-left: 8px;
        color: #999;
        font-size: 14px
      }

      .tweet.transition {
        opacity: 0.5;
      }

      .tweet.transition .link {
        pointer-events: none;
      }

      /*
       * Unauthorized
       */

      .full-page-text {
        font-family: "Open Sans", Arial, sans-serif;
        text-align: center;
        line-height: 100vh;
        font-size: 32px;
        margin: 0;
        font-weight: normal;
        color: rgba(0,0,0,.54);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /*
       * Loader
       * https://projects.lukehaas.me/css-loaders/
       */

      .loader,
      .loader:before,
      .loader:after {
        border-radius: 50%;
        width: 2.5em;
        height: 2.5em;
        animation-fill-mode: both;
        animation: load7 1.8s infinite ease-in-out;
      }

      .loader {
        color: #a9a9a9;
        font-size: 8px;
        margin: 0 auto 40px;
        position: relative;
        text-indent: -9999em;
        animation-delay: -0.16s;
      }

      .loader:before,
      .loader:after {
        content: '';
        position: absolute;
        top: 0;
      }

      .loader:before {
        left: -3.5em;
        animation-delay: -0.32s;
      }

      .loader:after {
        left: 3.5em;
      }

      .loader.full-page {
        margin-top: calc(50vh - 30px);
      }

      @-webkit-keyframes load7 {
        0%,
        80%,
        100% {
          box-shadow: 0 2.5em 0 -1.3em;
        }
        40% {
          box-shadow: 0 2.5em 0 0;
        }
      }

      @keyframes load7 {
        0%,
        80%,
        100% {
          box-shadow: 0 2.5em 0 -1.3em;
        }
        40% {
          box-shadow: 0 2.5em 0 0;
        }
      }
      `}/>

      <p>
        Once you replace the styles, the application will rebuild and the browser will automatically update to
        reflect the styling changes.
      </p>

      <blockquote>
        <p>
          You may notice that this file is not explicitly included in <code>index.html</code>, but still
          controls the styling of the application.
        </p>
        <p>
          The reason that happens is because this file is imported by the <code>Master</code> component located
          at <code>src/components/Master.js</code>, which is currently being rendered as the root component of the
          application, and the styles are being injected into the webpage by Webpack.
        </p>
        <p>
          You will interact with the <code>Master</code> component more later on.
        </p>
      </blockquote>

      <h3>
        Visual Check-in
      </h3>

      <p>
        If everything went well, your application should now look like this.
      </p>

      <img className="drop-shadow" src={image} />

      <h2>
        Code Changes
      </h2>

      <p>
        Below is a list of files modified during this step.
      </p>

      <h3>
        assets/css/main.css
      </h3>

      <Markdown type="css" text={`
      /*
       * Create Tweet Button
       */

      .create-button {
        position: absolute;
        top: 25px;
        right: 15px;
        z-index: 1000;
        border-radius: 100px;
      }

      .create-button:focus {
        outline: none !important;
      }

      /*
       * Edit and Delete Links
       */

      .link {
        cursor: pointer;
        margin-right: 16px;
      }

      /*
       * Feed
       */

      .feed .title {
        text-align: center;
      }

      .feed .tweets {
        margin-top: 32px;
      }

      .feed .pagination {
        text-align: center;
      }

      .feed nav {
        text-align: center;
      }

      .feed .transition {
        opacity: 0.5;
      }

      /*
       * Filter
       */

      .filter {
        margin-top: 20px;
      }


      /*
       * Header
       */

      .header .container {
        position: relative;
      }

      /*
       * Footer
       */

      .footer {
        text-align: center;
        margin-top: 32px;
        margin-bottom: 64px;
        min-height: 60px;
      }

      .footer button:focus {
        outline: none !important;
      }

      .footer .btn {
        margin-top: 7px;
        margin-bottom: 7px;
      }

      /*
       * Profile
       */

      .profile {
        position: relative;
        display: block;
        margin-bottom: .75rem;
        background-color: #fff;
        border-radius: .25rem;
        border: 1px solid rgba(0,0,0,.125);
        margin-top: 20px;
      }

      .profile .card-block {
        padding: 1.25rem
      }

      .profile .avatar {
        width: 48px;
        position: absolute;
        top: -24px;
        left: calc(50% - 24px);
        border: 1px solid gray
      }

      .profile .permissions {
        margin-left: -12px;
      }

      /*
       * Tweet
       */

      .tweet .avatar {
        width: 32px;
        border: 1px solid gray
      }

      .tweet .image-container {
        display: inline-block;
        vertical-align: top;
        width: 32px
      }

      .tweet .content-container {
        display: inline-block;
        margin-left: 8px;
        max-width: 85%
      }

      .tweet .title {
        line-height: 32px;
        display: inline-block
      }

      .tweet .text {
        margin-bottom: 5px
      }

      .tweet .timestamp {
        display: inline-block;
        margin-left: 8px;
        color: #999;
        font-size: 14px
      }

      .tweet.transition {
        opacity: 0.5;
      }

      .tweet.transition .link {
        pointer-events: none;
      }

      /*
       * Unauthorized
       */

      .full-page-text {
        font-family: "Open Sans", Arial, sans-serif;
        text-align: center;
        line-height: 100vh;
        font-size: 32px;
        margin: 0;
        font-weight: normal;
        color: rgba(0,0,0,.54);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /*
       * Loader
       * https://projects.lukehaas.me/css-loaders/
       */

      .loader,
      .loader:before,
      .loader:after {
        border-radius: 50%;
        width: 2.5em;
        height: 2.5em;
        animation-fill-mode: both;
        animation: load7 1.8s infinite ease-in-out;
      }

      .loader {
        color: #a9a9a9;
        font-size: 8px;
        margin: 0 auto 40px;
        position: relative;
        text-indent: -9999em;
        animation-delay: -0.16s;
      }

      .loader:before,
      .loader:after {
        content: '';
        position: absolute;
        top: 0;
      }

      .loader:before {
        left: -3.5em;
        animation-delay: -0.32s;
      }

      .loader:after {
        left: 3.5em;
      }

      .loader.full-page {
        margin-top: calc(50vh - 30px);
      }

      @-webkit-keyframes load7 {
        0%,
        80%,
        100% {
          box-shadow: 0 2.5em 0 -1.3em;
        }
        40% {
          box-shadow: 0 2.5em 0 0;
        }
      }

      @keyframes load7 {
        0%,
        80%,
        100% {
          box-shadow: 0 2.5em 0 -1.3em;
        }
        40% {
          box-shadow: 0 2.5em 0 0;
        }
      }
      `}/>


      <h2>
        Next Steps
      </h2>
      <p>
        Next we're going to <Link to="../step-3/">add the header</Link>.
      </p>
    </Template>
  )
};

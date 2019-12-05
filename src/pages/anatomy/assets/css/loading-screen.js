import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/Anatomy';
import Code from '../../../../components/Code';
import CodeTabs from '../../../../components/CodeTabs';
import CodeTab from '../../../../components/CodeTab';

export default (props) => {
  return (
    <Template>
      <h1>
        /assets/css/loading-screen.css
      </h1>
      <p>
        The is the CSS file that captures the behavior for the loading screen.
      </p>

      <h3>
        Defaults
      </h3>
      <p>
        The default file included in new projects looks like this:
      </p>
      <Code type="css" text={`
      @-webkit-keyframes logo-breathe {
        from {
          opacity: .2;
          filter: alpha(opacity=20)
        }
        to {
          opacity: 1;
          filter: alpha(opacity=100)
        }
      }

      @keyframes logo-breathe {
        from {
          opacity: .2;
          filter: alpha(opacity=20)
        }
        to {
          opacity: 1;
          filter: alpha(opacity=100)
        }
      }

      #loading-screen {
        background: #2595FF;
        background-image: linear-gradient(rgba(108, 91, 123, 0.8), rgba(53, 92, 125, 0.8));
        /*background-image: radial-gradient(rgba(108, 91, 123, 0.8), rgba(53, 92, 125, 0.8));*/
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 999999;
        opacity: 1;
        transition: opacity 0.75s ease;
      }

      #loading-screen.loading-screen-fade {
        opacity: 0;
      }

      #loading-screen.loading-screen-hide {
        display: none;
      }

      #loading-screen .logo {
        position: absolute;
        background-image: url(../images/logo.png);
        height: 150px;
        width: 150px;
        background-size: 150px 150px;
        top: calc(50% - 75px);
        left: calc(50% - 75px);
      }

      #loading-screen .logo.breathe {
        animation-name: logo-breathe;
        animation-duration: 1.8s;
        animation-delay: .2s;
        animation-timing-function: cubic-bezier(.73,.005,.42,1.005);
        animation-iteration-count: infinite;
        animation-direction: alternate;
      }
      `}/>
    </Template>
  );
};

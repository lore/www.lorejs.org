import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreGenerateComponent';
import Markdown from '../../../../components/Markdown';
import CodeTabs from '../../../../components/CodeTabs';
import CodeTab from '../../../../components/CodeTab';

export default (props) => {
  return (
    <Template>
      <h1>
        --router
      </h1>
      <p>
        Providing <code>--router</code> as an argument will generate a component configured for use with React Router.
      </p>

      <h3>
        Usage
      </h3>
      <Markdown type="sh" text={`
      lore generate component MyComponent --router
      `}/>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        import React from 'react';
        import createReactClass from 'create-react-class';
        import PropTypes from 'prop-types';
        import { Link, withRouter } from 'react-router';

        export default withRouter(createReactClass({
          displayName: 'MyComponent',

          propTypes: {
            router: PropTypes.object.isRequired
          },

          render() {
            return (
              <div></div>
            );
          }
        }));
        `}/>
        <CodeTab syntax="ES6" text={`
        import React from 'react';
        import PropTypes from 'prop-types';
        import { Link, withRouter } from 'react-router';

        class MyComponent extends React.Component {

          constructor(props) {
            super(props);

            // Set your initial state here
            // this.setState = {};

            // Bind your custom methods so you can access the expected 'this'
            // this.myCustomMethod = this.myCustomMethod.bind(this);
          }

          render() {
            return (
              <div></div>
            );
          }

        }

        MyComponent.propTypes = {
          router: PropTypes.object.isRequired
        };

        export default withRouter(MyComponent);
        `}/>
        <CodeTab syntax="ESNext" text={`
        import React from 'react';
        import PropTypes from 'prop-types';
        import { Link, withRouter } from 'react-router';

        @withRouter
        class MyComponent extends React.Component {

          static propTypes = {
            router: PropTypes.object.isRequired
          };

          constructor(props) {
            super(props);

            // Set your initial state here
            // this.setState = {};

            // Bind your custom methods so you can access the expected 'this'
            // this.myCustomMethod = this.myCustomMethod.bind(this);
          }

          render() {
            return (
              <div></div>
            );
          }

        }

        export default MyComponent;
        `}/>
      </CodeTabs>
    </Template>
  )
};

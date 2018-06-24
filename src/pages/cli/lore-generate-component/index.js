import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/LoreGenerateComponent';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';

export default (props) => {
  return (
    <Template>
      <h1>
        generate component
      </h1>
      <p>
        CLI command to add a Component to your project.
      </p>
      <p>
        The component will be generated using the language preference specified in the <code>.lorerc</code> file
        of your project, and placed in the <code>src/components</code> folder.
      </p>

      <h3>
        Usage
      </h3>
      <Markdown type="sh" text={`
      lore generate component MyComponent
      `}/>

      <p>
        The command above create a file located at <code>src/componnets/MyComponent.js</code> that looks like this:
      </p>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        import React from 'react';
        import createReactClass from 'create-react-class';
        import PropTypes from 'prop-types';

        export default createReactClass({
          displayName: 'MyComponent',

          propTypes: {},

          render() {
            return (
              <div></div>
            );
          }
        });
        `}/>
        <CodeTab syntax="ES6" text={`
        import React from 'react';
        import PropTypes from 'prop-types';

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

        MyComponent.propTypes = {};

        export default MyComponent;
        `}/>
        <CodeTab syntax="ESNext" text={`
        import React from 'react';
        import PropTypes from 'prop-types';

        class MyComponent extends React.Component {

          static propTypes = {};

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

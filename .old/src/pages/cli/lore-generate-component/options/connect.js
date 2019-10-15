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
        --connect
      </h1>
      <p>
        Providing <code>--connect</code> as an argument will generate a component wrapped in
        the <code>lore.connect</code> decorator.
      </p>

      <h3>
        Usage
      </h3>
      <Markdown type="sh" text={`
      lore generate component MyComponent --connect
      `}/>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        import React from 'react';
        import createReactClass from 'create-react-class';
        import PropTypes from 'prop-types';
        import { connect } from 'lore-hook-connect';

        export default connect((getState, props) => {
          return {
            // models: getState('model.find')
          };
        })(
        createReactClass({
          displayName: 'MyComponent',

          propTypes: {
            // models: PropTypes.object.isRequired
          },

          render() {
            return (
              <div></div>
            );
          }
        })
        );
        `}/>
        <CodeTab syntax="ES6" text={`
        import React from 'react';
        import PropTypes from 'prop-types';
        import { connect } from 'lore-hook-connect';

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
          // models: PropTypes.object.isRequired
        };

        export default connect((getState, props) => {
          return {
            // models: getState('model.find')
          };
        })(MyComponent);
        `}/>
        <CodeTab syntax="ESNext" text={`
        import React from 'react';
        import PropTypes from 'prop-types';
        import { connect } from 'lore-hook-connect';

        @connect((getState, props) => {
          return {
            // models: getState('model.find')
          };
        })
        class MyComponent extends React.Component {

          static propTypes = {
            // models: PropTypes.object.isRequired
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

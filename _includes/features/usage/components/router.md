{% tabs tab1={"name": "ES5", "id": 4} | tab2={"name": "ES6", "id": 5} | tab3={"name": "ESNext", "id": 6}%}
{% tab id=4, is_active=true %}
```js
var React = require('react');
var Router = require('react-router');

module.exports = React.createClass({
  displayName: 'MyComponent',

  /**
   * This mixin provides a 'history' object on 'this'.
   * To navigate to a new route, call it like this:
   * this.history.pushState(null, '/the/new/url');
   *
   * Learn more at:
   * https://github.com/reactjs/react-router/blob/v1.0.3/docs/API.md#history-mixin
   */
  mixins: [Router.History],

  propTypes: {},

  render: function () {
    return (
      <div></div>
    );
  }
});
```
{% endtab %}
{% tab id=5 %}
```js
import React, { Component, PropTypes } from 'react';

/**
 * IMPORTANT!!
 *
 * The template for ES6 components does not currently support react-router integration.
 * This template will be updated as soon a solution is in place.
 */
class MyComponent extends Component {

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
    )
  }
}

MyComponent.propTypes = {};

// NOTE: Please see https://github.com/lore/lore/issues/71 for a discussion
// about why this template is not yet using the ES6 'export' syntax.
module.exports = MyComponent;
```
{% endtab %}
{% tab id=6 %}
```js
import React, { Component, PropTypes } from 'react';

/**
 * IMPORTANT!!
 *
 * The template for ESNext components does not currently support react-router integration.
 * This template will be updated as soon a solution is in place.
 */
class MyComponent extends Component {

  static propTypes = {}

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
    )
  }
}

// NOTE: Please see https://github.com/lore/lore/issues/71 for a discussion
// about why this template is not yet using the ES6 'export' syntax.
module.exports = MyComponent;
```
{% endtab %}
{% endtabs %}

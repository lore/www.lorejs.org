import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/forms/PatternConstruction';
import Markdown from '../../../../components/Markdown';
import CodeTabs from '../../../../components/CodeTabs';
import CodeTab from '../../../../components/CodeTab';
import FormsPatternTutorialBranch from '../../../../components/FormsPatternTutorialBranch';
import image from '../../../../assets/images/forms/tutorial/create-tweet-dialog.png';

export default (props) => {
  return (
    <Template>
      <h1>
        1. Refactor Fields
      </h1>
      <p>
        In this step we'll make small change to refactor our fields, and eliminate the <code>onBlur</code> callback
        from our forms.
      </p>

      <FormsPatternTutorialBranch branch="create.1" />

      <h3>
        What's the problem?
      </h3>
      <p>
        Take a look at the code below, which reflects the field to capture text input:
      </p>
      <Markdown text={`
      <div className={\`form-group \$\{touched['text'] && errors['text'] ? 'has-error' : ''\}\`}>
        <label>
          Message
        </label>
        <textarea
          className="form-control"
          rows="3"
          value={data.text}
          placeholder="What's happening?"
          onChange={(event) => {
            this.onChange('text', event.target.value)
          }}
          onBlur={() => {
            this.onBlur('text');
          }}
        />
        {touched['text'] && errors['text'] ? (
          <span className="help-block">
            {errors['text']}
          </span>
        ) : null}
      </div>
      `}/>
      <p>
        One concern with this code is the number of places where the name of the field appears, which
        is <code>text</code> in this example. For example:
      </p>
      <ul>
        <li>
          touched['text'] && errors['text']
        </li>
        <li>
          data.text
        </li>
        <li>
          this.onChange('text', event.target.value)
        </li>
        <li>
          this.onBlur('text')
        </li>
        <li>
          touched['text'] && errors['text']
        </li>
        <li>
          errors['text']
        </li>
      </ul>
      <p>
        In this case, there are 8 places where <code>text</code> appears, and it's not hard to picture a scenario
        where a bug is accidentally introduced just by mistyping the name, or forgetting to add or update one of those
        locations.
      </p>

      <h3>
        How do we solve it?
      </h3>
      <p>
        In this step, we're going to solve that by introducing a component called <code>Field</code> that is part of
        the <code>lore-react-forms</code> package. After introducing this component, we'll only need to specify the
        name of the field <em>once</em>, and reduce the risk of copy/paste errors.
      </p>
      <blockquote>
        <p>
          You can learn more about the <code>Field</code> component <Link to="/forms/components/field/">here</Link>.
        </p>
      </blockquote>

      <h3>
        Import Field
      </h3>
      <p>
        Start by importing <code>Field</code> from <code>lore-react-forms</code>.
      </p>
      <Markdown text={`
      // src/dialogs/tweet/create/index.js
      import { Field } from 'lore-react-forms';
      ...
      `}/>
      <p>
        Then refactor the <code>text</code> field to look like this:
      </p>
      <Markdown text={`
      // src/dialogs/tweet/create/index.js
      <div className="row">
        <div className="col-md-12">
          <Field name="text" data={data} errors={errors} onChange={this.onChange}>
            {(field) => {
              return (
                <div className={\`form-group \$\{field.touched && field.error ? 'has-error' : ''\}\`}>
                  <label>
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    rows="3"
                    value={field.value}
                    placeholder="What's happening?"
                    onChange={(event) => {
                      field.onChange(event, event.target.value)
                    }}
                    onBlur={field.onBlur}
                  />
                  {field.touched && field.error ? (
                    <span className="help-block">
                      {field.error}
                    </span>
                  ) : null}
                </div>
              );
            }}
          </Field>
        </div>
      </div>
      `}/>
      <p>
        And then refactor the <code>userId</code> field to look like this:
      </p>
      <Markdown text={`
      // src/dialogs/tweet/create/index.js
      <div className="row">
        <div className="col-md-12">
          <Field name="userId" data={data} errors={errors} onChange={this.onChange}>
            {(field) => {
              return (
                <div className={\`form-group \$\{field.touched && field.error ? 'has-error' : ''\}\`}>
                  <label>
                    User
                  </label>
                  <Connect callback={(getState, props) => {
                    return {
                      options: getState('user.find')
                    };
                  }}>
                    {(connect) => {
                      return (
                        <select
                          className="form-control"
                          value={field.value}
                          onChange={(event) => {
                            const value = event.target.value;
                            field.onBlur();
                            field.onChange(event, value ? Number(value) : undefined)
                          }}
                        >
                          {[<option key="" value=""/>].concat(connect.options.data.map((datum) => {
                            return (
                              <option key={datum.id} value={datum.id}>
                                {datum.data.nickname}
                              </option>
                            );
                          }))}
                        </select>
                      )
                    }}
                  </Connect>
                  {field.touched && field.error ? (
                    <span className="help-block">
                      {field.error}
                    </span>
                  ) : null}
                </div>
              );
            }}
          </Field>
        </div>
      </div>
      `}/>

      <h3>
        Review
      </h3>
      <p>
        This wasn't a big change, but it does provide a few benefits.
      </p>
      <p>
        For starters, we no longer need to use the name of the field to access things like the value of the
        field, which simplifies some of the code:
      </p>
      <ul>
        <li>
          <code>touched['text'] && errors['text']</code> becomes <code>field.touched && field.error</code>
        </li>
        <li>
          <code>data.text</code> becomes <code>field.value</code>
        </li>
        <li>
          <code>this.onChange('text', event.target.value)</code> becomes <code>field.onChange(event, event.target.value)</code>
        </li>
        <li>
          <code>this.onBlur('text')</code> becomes <code>field.onBlur</code>
        </li>
        <li>
          <code>errors['text']</code> becomes <code>field.error</code>
        </li>
      </ul>
      <p>
        Additionally, the <code>Field</code> is now keeping track of whether the component has been touched or not,
        which means we no longer need to keep track of <code>touched</code> in the forms state, and can also delete
        the <code>onBlur()</code> callback.
      </p>
      <p>
        So now, instead of referencing the name of the field, we only need to tell the <code>Field</code> what it's
        called, and the component will automatically
        map <code>data</code> into <code>value</code> and <code>errors</code> into <code>error</code>.
      </p>

      <h3>
        Visual Check-in
      </h3>
      <p>
        If everything went well, clicking the create button will still launch a dialog that you can use to create a
        new tweet.
      </p>

      <img className="drop-shadow" src={image} />

      <h2>
        Code Changes
      </h2>
      <p>
        Below is a list of files modified during this step.
      </p>

      <h3>
        src/dialogs/tweet/create/index.js
      </h3>
      <Markdown text={`
      import React from 'react';
      import createReactClass from 'create-react-class';
      import PropTypes from 'prop-types';
      import _ from 'lodash';
      import { Connect } from 'lore-hook-connect';
      import { Field } from 'lore-react-forms';

      export default createReactClass({
        displayName: 'CreateTweetDialog',

        propTypes: {
          onCancel: PropTypes.func
        },

        getInitialState() {
          return {
            data: {
              text: '',
              userId: undefined
            }
          };
        },

        request(data) {
          lore.actions.tweet.create(data);
        },

        onSubmit() {
          const { data } = this.state;
          this.request(data);
          this.dismiss();
        },

        dismiss() {
          this.props.onCancel();
        },

        onChange(name, value) {
          const nextData = _.merge({}, this.state.data);
          nextData[name] = value;
          this.setState({
            data: nextData
          });
        },

        getValidators: function(data) {
          return {
            text: [function(value) {
              if (!value) {
                return 'This field is required';
              }
            }],
            userId: [function(value) {
              if (value === undefined) {
                return 'This field is required'
              }
            }]
          };
        },

        getErrors: function(validatorDictionary, data) {
          return _.mapValues(data, function(value, key) {
            const validators = validatorDictionary[key];
            let error = null;
            if (validators) {
              validators.forEach(function(validator) {
                error = error || validator(value);
              });
            }
            return error;
          });
        },

        hasError: function(errors) {
          const errorCount = _.reduce(errors, function(result, value, key) {
            if (value) {
              return result + 1;
            }

            return result;
          }, 0);

          return errorCount > 0;
        },

        render() {
          const { data } = this.state;
          const validators = this.getValidators(data);
          const errors = this.getErrors(validators, data);
          const hasError = this.hasError(errors);

          return (
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" onClick={this.dismiss}>
                    <span>&times;</span>
                  </button>
                  <h4 className="modal-title">
                    Create Tweet
                  </h4>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-12">
                      <Field name="text" data={data} errors={errors} onChange={this.onChange}>
                        {(field) => {
                          return (
                            <div className={\`form-group \$\{field.touched && field.error ? 'has-error' : ''\}\`}>
                              <label>
                                Message
                              </label>
                              <textarea
                                className="form-control"
                                rows="3"
                                value={field.value}
                                placeholder="What's happening?"
                                onChange={(event) => {
                                  field.onChange(event, event.target.value)
                                }}
                                onBlur={field.onBlur}
                              />
                              {field.touched && field.error ? (
                                <span className="help-block">
                                  {field.error}
                                </span>
                              ) : null}
                            </div>
                          );
                        }}
                      </Field>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <Field name="userId" data={data} errors={errors} onChange={this.onChange}>
                        {(field) => {
                          return (
                            <div className={\`form-group \$\{field.touched && field.error ? 'has-error' : ''\}\`}>
                              <label>
                                User
                              </label>
                              <Connect callback={(getState, props) => {
                                return {
                                  options: getState('user.find')
                                };
                              }}>
                                {(connect) => {
                                  return (
                                    <select
                                      className="form-control"
                                      value={field.value}
                                      onChange={(event) => {
                                        const value = event.target.value;
                                        field.onBlur();
                                        field.onChange(event, value ? Number(value) : undefined)
                                      }}
                                    >
                                      {[<option key="" value=""/>].concat(connect.options.data.map((datum) => {
                                        return (
                                          <option key={datum.id} value={datum.id}>
                                            {datum.data.nickname}
                                          </option>
                                        );
                                      }))}
                                    </select>
                                  )
                                }}
                              </Connect>
                              {field.touched && field.error ? (
                                <span className="help-block">
                                  {field.error}
                                </span>
                              ) : null}
                            </div>
                          );
                        }}
                      </Field>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <div className="row">
                    <div className="col-md-12">
                      <button
                        type="button"
                        className="btn btn-default"
                        onClick={this.dismiss}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        disabled={hasError}
                        onClick={this.onSubmit}
                      >
                        Create
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }

      });
      `}/>

      <h2>
        Next Steps
      </h2>
      <p>
        Next we're going to <Link to="../step-2/">refactor the form</Link>.
      </p>
    </Template>
  )
};

import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Connect';
import Markdown from '../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        connect
      </h1>
      <p>
        <code>connect</code> is a decorator created to simplify the process of providing data to components.
      </p>
      <p>
        The basic usage looks like this:
      </p>

      <Markdown text={`
      import { connect } from 'lore-hook-connect';

      connect(function(getState, props, context) {
        return {
          tweets: getState('tweet.find')
        }
      })(
        createReactClass({
          propTypes: {
            tweets: PropTypes.object.isRequired
          }
        })
      )
      `}/>

      <p>
        And full usage (showing all available options) looks like this:
      </p>

      <Markdown text={`
      import { connect } from 'lore-hook-connect';

      connect(function(getState, props, context) {
        const { user } = context;
        return {
          tweets: getState('tweet.find', {
            where: {
              user: user.id
            }
          }, { forceFetchOnMount: true })
        }
      }, {
        contextTypes: {
          user: PropTypes.object.isRequired
        },
        subscribe: true
      })(
        createReactClass({
          propTypes: {
            tweets: PropTypes.object.isRequired
          },
          //...
        })
      )
      `}/>

      <p>
        And a simplified view of the interface looks like this:
      </p>

      <Markdown text={`
      connect(select, options = {})(
        //...component...
      )
      `}/>

      <p>
        The decorator accepts two arguments. The first is a function, called <code>select</code>, that
        controls what data gets passed to the component through <code>props</code>. The second argument is a
        set of <code>options</code> that affect the behavior of the decorator.
      </p>
      <p>
        We'll explore each argument in depth below, starting with <code>select</code>.
      </p>

      <h2>
        select
      </h2>
      <p>
        The first argument, <code>select</code>, is a function that controls what data gets passed to the decorated
        component through <code>props</code>. In the example usage above, it's the function that looks like this:
      </p>
      <Markdown text={`
      function select(getState, props, context) {
        return {
          tweets: getState('tweet.find')
        }
      }
      `}/>
      <p>
        The <code>select</code> function provides three arguments.
      </p>

      <h3>
        getState
      </h3>
      <p>
        The first argument is <code>getState</code>, which is a function responsible for retrieving data from the
        reducers, and invoking an action if that data doesn't exist. Typical usage looks like this:
      </p>
      <Markdown text={`
      getState('tweet.find', {
        where: {
          user: 1
        }
      })
      `}/>
      <p>
        And a simplified view of the interface looks like this (note the third argument):
      </p>
      <Markdown text={`
      getState(blueprintKey, params, options)
      `}/>
      <p>
        The <code>getState</code> function accepts 3 arguments.
      </p>

      <h4>
        blueprintKey
      </h4>
      <p>
        The <code>blueprintKey</code> is a <code>string</code> that communicates which blueprint you want to
        invoke, and each blueprint is responsible for choosing how to use the other arguments.
      </p>
      <p>
        For example, this example call invokes the <code>find</code> blueprint, and expresses that it wants to
        use it with the <code>tweet</code> data.
      </p>
      <Markdown text={`
      getState('tweet.find')
      `}/>

      <h4>
        params
      </h4>
      <p>
        The second argument is <code>params</code> and is an <code>object</code> that each blueprint uses differently
        based on it's intended purpose.
      </p>
      <p>
        To illustrate, let's expand on the example usage above, and provide a params object to communicate that we
        only wants the tweets where <code>id</code> of the <code>user</code> who created them is <code>1</code>.
      </p>
      <Markdown text={`
      getState('tweet.find', {
        where: {
          user: 1
        }
      })
      `}/>
      <p>
        Other blueprints will have different behavior, such as the <code>byId</code> blueprint, whose usage looks like
        this:
      </p>
      <Markdown text={`
      getState('tweet.byId', {
        id: 1
      })
      `}/>
      <p>
        For that blueprint, there is no <code>where</code> attribute, but it does expect an <code>id</code> attribute.
      </p>

      <h4>
        options
      </h4>
      <p>
        The third argument is <code>options</code> and has the ability to modify the way the blueprint behaves.
      </p>
      <p>
        To illustrate, let's expand on the example usage above one more time. Normally, as long as the data matching
        the query exists within the reducers, that data will be provided to the component, and the <code>action</code> will
        never be invoked a second time.
      </p>
      <p>
        But sometimes, we might <strong>want</strong> to refetch the data. For example, let's say everytime the user
        navigates to the page, that data is re-fetched, guarenteeing that what the user sees is always fresh. This
        type of behavior would immitate the way a server-side rendered application behaves, and we can achieve that
        by providing a <code>forceFetchOnMount</code> attribute in the <code>options</code> object like this:
      </p>
      <Markdown text={`
      getState('tweet.find', {
        where: {
          user: 1
        }
      }, { forceFetchOnMount: true })
      `}/>
      <p>
        How, every time the user navigates back to this page, or this component, the data will be refetched from
        the API.
      </p>

      <h3>
        props
      </h3>
      <p>
        The second argument for <code>select</code> is <code>props</code>, and is an object containing
        whatever <code>props</code> were passed to the component <code>connect</code> is decorating.
      </p>
      <p>
        This is useful when you need to use those props to compose your <code>getState</code> call like this:
      </p>
      <Markdown text={`
      connect(function(getState, props, context) {
        const { user } = props;
        return {
          tweets: getState('tweet.find', {
            where: {
              user: user.id
            }
          })
        }
      })
      `}/>

      <h3>
        context
      </h3>
      <p>
        The third argument for <code>select</code> is <code>context</code>, which is useful when the data you need
        is not provided through <code>props</code> but <strong>is</strong> accessible from context. For example,
        if we want to fetch the tweets for the current user, we would use the <code>context</code> argument
        like this:
      </p>
      <Markdown text={`
      connect(function(getState, props, context) {
        const { user } = context;
        return {
          tweets: getState('tweet.find', {
            where: {
              user: user.id
            }
          })
        }
      })
      `}/>
      <blockquote>
        <code>context</code> can not be used correctly without first specifying the <code>contextTypes</code> in
        the <code>options</code> for <code>connect</code>.
      </blockquote>

      <h2>
        options
      </h2>
      <p>
        The second argument to <code>connect</code> is <code>options</code>, and this object is used to tailor the
        behavior of <code>connect</code>. Example usage looks like this:
      </p>
      <Markdown text={`
      connect(function(getState, props, context) {
        // ...
      }, {
        contextTypes: {
          user: PropTypes.object.isRequired
        },
        subscribe: false
      })
      `}/>
      <p>
        There are two options available.
      </p>

      <h3>
        contextTypes
      </h3>
      <p>
        Sometimes you may need to provide data stored in <code>context</code> to the <code>select</code> function,
        to be used when determining what data to retrieve. In that situation, you need to describe what data you
        want to be included, and you do that through this option.
      </p>
      <p>
        For example, let's say we want to fetch all the tweets for the current user, who is stored in context
        as <code>user</code>. We could do that like this:
      </p>
      <Markdown text={`
      connect(function(getState, props, context) {
        const { user } = context;
        return {
          tweets: getState('tweet.find', {
            where: {
              user: user.id
            }
          })
        }
      }, {
        contextTypes: {
          user: PropTypes.object.isRequired
        }
      })
      `}/>

      <h3>
        subscribe
      </h3>
      <p>
        Typically, the only component that ever subscribes to changes in the Redux store is
        the <code>Master</code> component at <code>/src/components/Master.js</code>, which is often the root component
        of the application.
      </p>
      <p>
        The reason for this is because the way React behaves means that whenever <em>any component re-renders</em>, all
        the children under it will also re-render. So if the root component of the application is subscribed to
        changes in the Redux store, then it guarantees the application will always re-render in it's entirety whenever
        data changes.
      </p>
      <p>
        But if you <strong>wanted</strong> to manually subscribe a compoent to changes in the Redux store, you could
        do so like this:
      </p>
      <Markdown text={`
      connect(function(getState, props, context) {
        // ...data...
      }, {
        subscribe: true
      })(
       //...component...
      )
      `}/>
      <p>
        There are two situations where you may want (or need) to do this:
      </p>
      <ol>
        <li>
          The first situation involves <code>Dialogs</code>.The practice Lore follows for dialogs renders them
          outside the main application, when means they aren't part of <code>Master</code>, and thus won't update
          when data changes. So dialogs need to subscribe to changes in the Redux store (though if you're using a
          hook like <code>lore-hook-dialog-bootstrap</code> it will happen automatically).
        </li>
        <li>
          The second situation involves <code>performance optimization</code>. For example, there may be times where
          (for whatever reason) you want to break the natural render cycle, and do <strong>not</strong> want a
          child component to re-render when the parent changes. In this case, you'll need to manually subscribe the
          child to changes in the Redux store, because you disconnected it from the default behavior.
        </li>
      </ol>
    </Template>
  );
};

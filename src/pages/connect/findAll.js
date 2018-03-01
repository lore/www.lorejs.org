import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Connect';
import Markdown from '../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        findAll
      </h1>
      <p>
        This blueprint mirrors the <code>find</code> blueprint, but adds a helper to automatically include data
        that matches the <code>where</code> object.
      </p>
      <p>
        This is useful if you want to display a list of data (such as tweets created by a user) and then
        automatically have new tweets they create show up at the top of that list.
      </p>

      <h3>
        Usage
      </h3>
      <p>
        Example usage is below:
      </p>
      <Markdown text={`
      import { connect } from 'lore-hook-connect';

      connect((getState, props) => {
        return {
          tweets: getState('tweet.findAll', {
            where: {
              user: 1
            }
          })
        }
      })
      `}/>
      <p>
        When invoked, this blueprint will create a API call, and then automatically merge data from the Redux
        Store into the object it returns, as long as that data matches all fields provided in
        the <code>where</code> attribute.
      </p>
      <p>
        To illustrate, imagine the query above returned 3 tweets (meaning the API has 3 tweets created by the user
        with the <code>id</code> of 1, who we will pretend is the current user):
      </p>
      <ol>
        <li>First tweet</li>
        <li>Second tweet</li>
        <li>Third tweet</li>
      </ol>
      <p>
        Now imagine the current user composes another tweet, and sends it. Because this tweet is now in our Redux
        Store, and the <code>user</code> attribute is equal to <code>1</code>, it will automatically be included
        in the response from this blueprint, and the data returned from the blueprint will now look like this:
      </p>
      <ol>
        <li>NEW tweet</li>
        <li>First tweet</li>
        <li>Second tweet</li>
        <li>Third tweet</li>
      </ol>
      <p>
        In other words, this blueprint returns <code>the original cached response from the API</code> <strong>plus
        </strong> any additional data that lives in the Redux Store matching that criteria.
      </p>

      <h3>
        Blueprint
      </h3>
      <Markdown text={`
      import find from './find';

      export default _.defaultsDeep({

        defaults: {
          include: {
            where: function(model, params) {
              if (_.keys(params.where).length > 0) {
                return _.isMatch(model.data, params.where);
              }

              return true;
            }
          }
        }

      }, find);
      `}/>
    </Template>
  );
};

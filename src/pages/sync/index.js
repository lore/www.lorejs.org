import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Sync';
import Code from '../../components/Code';

export default (props) => {
  return (
    <Template
      title="Sync"
      subtitle="Introduction"
    >
      <p>
        Sync is the method that's actually responsible for making AJAX calls, and it
        uses <a href="https://github.com/axios/axios">axios</a> to do that.
      </p>
      <p>
        While it's rare that you would need to interact with this method directly, as the Model methods
        for <code>save()</code>, <code>update()</code>, and <code>destroy()</code> invoke it automatically,
        there are two scenarios where it's useful to interact with directly:
      </p>
      <ul className="list-disc pl-10">
        <li>
          <p>
            Sometimes APIs make breaking changes, like renaming an attribute, and it can be a lot of work to find
            and replace all references to the old attribute, and test the application to make sure it still works
            correctly.
          </p>
          <p>
            In this scenario you can use <code>parse()</code> to rename the new attribute back to the original name,
            but if you ever need to save changes to that attribute, the API won't see the change, because the you'll
            be sending back the original (no longer recognized) name.
          </p>
          <p>
            In this scenario, you need to map the original name back to the new name, and you can
            use <code>sync()</code> to do this.
          </p>
          <p>
            Combining the usage of <code>parse()</code> and <code>sync()</code> in this manner allow you to create
            a complete buffer between the API and your application, and transform properties back and forth however
            you need.
          </p>
        </li>
        <li>
          <p>
            You can also use this method to inspect the response object before the application gets it, This can be
            useful if you need to make a decision based on the status code of the response, like logging the user
            out if any request returns a 401 (suggesting their token expired), or if you just want to observe and
            log all network requests.
          </p>
        </li>
      </ul>

      <h2>
        Example Usage
      </h2>
      <p>
        To illustrate how to use <code>sync()</code>, the examples below assume a <code>Tweet</code> model has
        been created like this:
      </p>
      <Code type="jsx" text={`
      import { Model, syc } from 'lore-models';

      const Tweet = Model.extend({
        urlRoot: 'http://localhost:1337/tweets'
      })
      `}/>

      <h3>
        Create
      </h3>
      <p>
        This code will create a tweet, and is similar to calling <code>tweet.save()</code> when the model instance
        has no <code>id</code>:
      </p>

      <Code type="jsx" text={`
      const tweet = new Tweet({
        text: 'A new tweet'
      })

      sync('create', model).then(function(response){
       // inspect the response
      })
      `}/>

      <h3>
        Update (PUT)
      </h3>
      <p>
        This code will update a tweet, and is similar to calling <code>tweet.save()</code> when the model instance
        has an <code>id</code>:
      </p>

      <Code type="jsx" text={`
      const tweet = new Tweet({
        id: 1,
        text: 'A new tweet'
      })

      sync('update', model).then(function(response){
       // inspect the response
      })
      `}/>

      <h3>
        Update (PATCH)
      </h3>
      <p>
        This code will update a tweet, but using <code>PATCH</code> instead of <code>PUT</code>, and is similar to
        calling <code>tweet.save({`{ patch: true }`})</code> when the model instance has an <code>id</code>:
      </p>

      <Code type="jsx" text={`
      const tweet = new Tweet({
        id: 1,
        text: 'A new tweet'
      })

      sync('patch', model).then(function(response){
       // inspect the response
      })
      `}/>

      <h3>
        Delete
      </h3>
      <p>
        This code will delete a tweet, and is similar to calling <code>tweet.destroy()</code>:
      </p>

      <Code type="jsx" text={`
      const tweet = new Tweet({
        id: 1
      })

      sync('delete', model).then(function(response){
       // inspect the response
      })
      `}/>

      <h3>
        Retrieve
      </h3>
      <p>
        This code will retrieve a tweet, and is similar to calling <code>tweet.fetch()</code>:
      </p>

      <Code type="jsx" text={`
      const tweet = new Tweet({
        id: 1
      })

      sync('read', model).then(function(response){
       // inspect the response
      })
      `}/>
    </Template>
  );
};

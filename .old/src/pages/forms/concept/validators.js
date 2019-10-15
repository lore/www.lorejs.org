import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/forms/Concept';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        Validators
      </h1>

      <p>
        Forms typically require validation, a way to confirm whether the user filled out all required fields,
        or whether what the user entered is valid.
      </p>

      <p>
        While you <em>could</em> argue that validation is a <em>field</em> concern, and NOT a <em>form</em> concern,
        I don't think that's true. Most of the time yes, but I say "no" for two reasons:
      </p>

      <ul>
        <li>
          Forms often need to know about the validity of ALL data, in order to enable/disable certain actions
          (like the user can't submit the form until all required fields are completed)
        </li>
        <li>
          Sometimes, the concept of "valid" is flexible, like how a user must enter a phone number OR a zip code.
        </li>
      </ul>

      <p>
        For those reasons, I've chosen to make validation a higher level operation.
      </p>

      <p>
        You could implement this any number of ways, but for this example, we're going to create some validators
        like below. Each receives a value, and if the value is invalid, returns an error. If the value is valid,
        it returns nothing.
      </p>

      <Markdown text={`
      export default {
        isRequired: function(value) {
          if (!value) {
            return 'This field is required'
          }
        },
        isBoolean: function(value) {
          if (value !== true && value !== false) {
            return 'This field must be a boolean';
          }
        }
      }
      `}/>
    </Template>
  )
};

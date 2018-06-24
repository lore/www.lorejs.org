import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreExtractAction';
import Markdown from '../../../../components/Markdown';
import CodeTabs from '../../../../components/CodeTabs';
import CodeTab from '../../../../components/CodeTab';
import QuickstartBranch from '../../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        update
      </h1>
      <p>
        CLI command to extract the <Link to="/actions/update/">update action</Link> for a given model into
        your project.
      </p>

      <h3>
        Usage
      </h3>

      <Markdown type="sh" text={`
      lore extract action [model]/update
      `}/>

      <h3>
        Example
      </h3>

      <Markdown type="sh" text={`
      lore extract action post/update
      `}/>

      <Markdown text={`
      import _ from 'lodash';
      import { ActionTypes, PayloadStates, normalize } from 'lore-utils';

      /*
       * Blueprint for Update method
       */
      export default function update(model, params) {
        return function(dispatch) {
          const Model = lore.models.post;
          const proxyModel = new Model(model.data);
          proxyModel.set(params);

          proxyModel.save().then(function() {
            // look through the model and generate actions for any attributes with
            // nested data that should be normalized
            const actions = normalize(lore, 'post').model(model);

            dispatch({
              type: ActionTypes.update('post'),
              payload: _.merge(model, {
                data: proxyModel.toJSON(),
                state: PayloadStates.RESOLVED
              })
            });

            // dispatch any actions created from normalizing nested data
            actions.forEach(dispatch);
          }).catch(function(response) {
            const error = response.data;

            if (response.status === 404) {
              dispatch({
                type: ActionTypes.update('post'),
                payload: _.merge(model, {
                  state: PayloadStates.NOT_FOUND,
                  error: error
                })
              });
            } else {
              dispatch({
                type: ActionTypes.update('post'),
                payload: _.merge(model, {
                  data: proxyModel.toJSON(),
                  state: PayloadStates.ERROR_UPDATING,
                  error: error
                })
              });
            }
          });

          return dispatch({
            type: ActionTypes.update('post'),
            payload: _.merge(model, {
              data: proxyModel.toJSON(),
              state: PayloadStates.UPDATING
            })
          });
        };
      };
      `}/>
    </Template>
  )
};

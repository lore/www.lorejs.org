import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Actions';
import Markdown from '../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        destroy
      </h1>
      <p>
        This blueprint...
      </p>

      <h3>
        Usage
      </h3>
      <p>
        Example usage is below:
      </p>
      <Markdown text={`
      lore.actions.tweet.destroy(tweet)
      `}/>

      <h3>
        Blueprint
      </h3>
      <Markdown text={`
      import _ from 'lodash';
      import { ActionTypes, PayloadStates, normalize } from 'lore-utils';

      export default function destroy(model) {
        return function(dispatch) {
          const Model = lore.models.{{ modelName }};
          const proxyModel = new Model(model.data);

          proxyModel.destroy().then(function() {
            // look through the model and generate actions for any attributes with
            // nested data that should be normalized
            const actions = normalize(lore, '{{ modelName }}').model(proxyModel);

            dispatch({
              type: ActionTypes.update('{{ modelName }}'),
              payload: _.merge(model, {
                state: PayloadStates.DELETED
              })
            });

            // dispatch any actions created from normalizing nested data
            actions.forEach(dispatch);
          }).catch(function(response) {
            const error = response.data;

            if (response.status === 404) {
              dispatch({
                type: ActionTypes.update('{{ modelName }}'),
                payload: _.merge(model, {
                  state: PayloadStates.NOT_FOUND,
                  error: error
                })
              });
            } else {
              dispatch({
                type: ActionTypes.update('{{ modelName }}'),
                payload: _.merge(model, {
                  state: PayloadStates.ERROR_DELETING,
                  error: error
                })
              });
            }
          });

          return dispatch({
            type: ActionTypes.update('{{ modelName }}'),
            payload: _.merge(model, {
              state: PayloadStates.DELETING
            })
          });
        };
      };
      `}/>
    </Template>
  );
};

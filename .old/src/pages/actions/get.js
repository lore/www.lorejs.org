import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Actions';
import Markdown from '../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        get
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
      lore.actions.tweet.get(/* id */)
      `}/>

      <h3>
        Blueprint
      </h3>
      <Markdown text={`
      import _ from 'lodash';
      import { ActionTypes, PayloadStates, payload, normalize } from 'lore-utils';

      export default function get(modelId, query = {}) {
        return function(dispatch) {
          const Model = lore.models.{{ modelName }};
          const model = new Model({
            id: modelId
          });

          model.fetch({
            data: query
          }).then(function() {
            // look through the model and generate actions for any attributes with
            // nested data that should be normalized
            const actions = normalize(lore, '{{ modelName }}').model(model);

            dispatch({
              type: ActionTypes.update('{{ modelName }}'),
              payload: payload(model, PayloadStates.RESOLVED)
            });

            // dispatch any actions created from normalizing nested data
            actions.forEach(dispatch);
          }).catch(function(response) {
            const error = response.data;

            if (response.status === 404) {
              dispatch({
                type: ActionTypes.update('{{ modelName }}'),
                payload: _.merge(payload(model), {
                  state: PayloadStates.NOT_FOUND,
                  error: error
                })
              });
            } else {
              dispatch({
                type: ActionTypes.update('{{ modelName }}'),
                payload: payload(model, PayloadStates.ERROR_FETCHING, error)
              });
            }
          });

          return dispatch({
            type: ActionTypes.add('{{ modelName }}'),
            payload: payload(model, PayloadStates.FETCHING)
          });
        };
      };
      `}/>
    </Template>
  );
};

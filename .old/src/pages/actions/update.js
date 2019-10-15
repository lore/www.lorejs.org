import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Actions';
import Markdown from '../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        update
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
      lore.actions.tweet.update(tweet, {
        text: ''
      })
      `}/>

      <h3>
        Blueprint
      </h3>
      <Markdown text={`
      import _ from 'lodash';
      import { ActionTypes, PayloadStates, normalize } from 'lore-utils';

      export default function update(model, params) {
        return function(dispatch) {
          const Model = lore.models.{{ modelName }};
          const proxyModel = new Model(model.data);
          proxyModel.set(params);

          proxyModel.save().then(function() {
            // look through the model and generate actions for any attributes with
            // nested data that should be normalized
            const actions = normalize(lore, '{{ modelName }}').model(model);

            dispatch({
              type: ActionTypes.update('{{ modelName }}'),
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
                  data: proxyModel.toJSON(),
                  state: PayloadStates.ERROR_UPDATING,
                  error: error
                })
              });
            }
          });

          return dispatch({
            type: ActionTypes.update('{{ modelName }}'),
            payload: _.merge(model, {
              data: proxyModel.toJSON(),
              state: PayloadStates.UPDATING
            })
          });
        };
      };
      `}/>
    </Template>
  );
};

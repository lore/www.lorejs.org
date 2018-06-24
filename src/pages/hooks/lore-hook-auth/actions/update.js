import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreHookAuth';
import Markdown from '../../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        update
      </h1>
      <p>
        The <code>update</code> action...
      </p>

      <h3>
        Default Implementation
      </h3>
      <p>
        The default implementation looks like this:
      </p>
      <Markdown type="jsx" text={`
      /* eslint consistent-return: "off" */

      import _ from 'lodash';
      import { ActionTypes, PayloadStates, normalize } from 'lore-utils';

      /*
       * Blueprint for Update method
       */

      export default function(modelName, models, lore) {
        const Model = models[modelName];

        return function update(model, params) {
          return function(dispatch) {
            const proxyModel = new Model(model.data);
            proxyModel.set(params);

            proxyModel.save().then(function() {
              // look through the model and generate actions for any attributes with
              // nested data that should be normalized
              const actions = normalize(lore, modelName).model(proxyModel);

              dispatch({
                type: ActionTypes.update(modelName),
                payload: _.merge(model, {
                  data: proxyModel.toJSON(),
                  state: PayloadStates.RESOLVED
                })
              });

              // dispatch any actions created from normalizing nested data
              actions.forEach(dispatch);
            }).catch(function(response) {
              const error = response.data;

              dispatch({
                type: ActionTypes.update(modelName),
                payload: _.merge(model, {
                  data: proxyModel.toJSON(),
                  state: PayloadStates.ERROR_UPDATING,
                  error: error
                })
              });
            });

            return dispatch({
              type: ActionTypes.update(modelName),
              payload: _.merge(model, {
                data: proxyModel.toJSON(),
                state: PayloadStates.UPDATING
              })
            });
          };
        };
      }
      `}/>
    </Template>
  )
};

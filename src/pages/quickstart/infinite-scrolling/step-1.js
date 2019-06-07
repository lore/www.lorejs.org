import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/pagination/final.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 1: Create Load More Button
      </h1>

      <p>
        In this step we'll create the Load More button that we'll need for infinite scrolling.
      </p>

      <QuickstartBranch branch="infinite-scrolling.1" />

      <h3>
        Button Behavior
      </h3>

      <p>
        The first component we're going to create will be the <code>LoadMoreButton</code>. The user will click this
        button to load more tweets, and it will have three responsibilities:
      </p>

      <ol>
        <li>Display the text "Load More" if there are more tweets to load</li>
        <li>Display a loading experience if more tweets are being fetched</li>
        <li>Disappear from view if there are no more tweets to fetch.</li>
      </ol>

      <h3>
        Add NextPage to Collection Metadata
      </h3>
      <p>
        Let's start by expanding the metadata for a collection to know whether there is a "next page" of data
        to load.
      </p>
      <p>
        To do that, take a look at the API response for any endpoint that returns a collection:
      </p>

      <Markdown text={`
      {
        data: [
          {...tweet...},
          {...tweet...}
        ],
        meta: {
          paginate: {
            currentPage: 1,
            nextPage: 2,
            prevPage: null,
            totalPages: 11,
            totalCount: 51,
            perPage: 5
          }
        }
      }
      `}/>
      <p>
        There's a field in <code>meta.paginate</code> called <code>nextPage</code>, and this field will either
        contain the number of the next page of data or be null if there are no more pages to display.
      </p>
      <p>
        To use that field in our application, we need to add it to be <code>meta</code> property of collections. To
        do that, open <code>config/connections.js</code> and update the <code>parse()</code> method
        for collections to look like this:
      </p>

      <Markdown text={`
      // config/connections.js
      ...
        parse: function(response) {
          this.meta = {
            totalCount: response.meta.paginate.totalCount,
            perPage: response.meta.paginate.perPage,
            nextPage: response.meta.paginate.nextPage
          };
          return response.data;
        }
      ...
      `}/>

      <p>
        With that change, we'll now be able to discover if there's a next page of data by
        inspecting <code>tweets.meta.nextPage</code>.
      </p>

      <h3>
        Create the Button
      </h3>

      <p>
        Next, create the button component by running the following command:
      </p>

      <Markdown text={`
      lore generate component LoadMoreButton
      `}/>

      <p>
        Then modify the file to look like this:
      </p>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        import React from 'react';
        import createReactClass from 'create-react-class';
        import PropTypes from 'prop-types';
        import PayloadStates from '../constants/PayloadStates';

        export default createReactClass({
          displayName: 'LoadMoreButton',

          propTypes: {
            lastPage: PropTypes.object.isRequired,
            onLoadMore: PropTypes.func.isRequired,
            nextPageMetaField: PropTypes.string.isRequired
          },

          render() {
            const {
              lastPage,
              onLoadMore,
              nextPageMetaField
            } = this.props;

            if(lastPage.state === PayloadStates.FETCHING) {
              return (
                <div className="footer">
                  <div className="loader"/>
                </div>
              );
            }

            if (!lastPage.meta[nextPageMetaField]) {
              return (
                <div className="footer"/>
              );
            }

            return (
              <div className="footer">
                <button className="btn btn-default btn-lg" onClick={onLoadMore}>
                  Load More
                </button>
              </div>
            );
          }

        });
        `}/>
        <CodeTab syntax="ES6" text={`
        import React from 'react';
        import PropTypes from 'prop-types';
        import PayloadStates from '../constants/PayloadStates';

        class LoadMoreButton extends React.Component {

          render() {
            const {
              lastPage,
              onLoadMore,
              nextPageMetaField
            } = this.props;

            if(lastPage.state === PayloadStates.FETCHING) {
              return (
                <div className="footer">
                  <div className="loader"/>
                </div>
              );
            }

            if (!lastPage.meta[nextPageMetaField]) {
              return (
                <div className="footer"/>
              );
            }

            return (
              <div className="footer">
                <button className="btn btn-default btn-lg" onClick={onLoadMore}>
                  Load More
                </button>
              </div>
            );
          }
        }

        LoadMoreButton.propTypes = {
          lastPage: PropTypes.object.isRequired,
          onLoadMore: PropTypes.func.isRequired,
          nextPageMetaField: PropTypes.string.isRequired
        };

        export default LoadMoreButton;
        `}/>
        <CodeTab syntax="ESNext" text={`
        import React from 'react';
        import PropTypes from 'prop-types';
        import PayloadStates from '../constants/PayloadStates';

        class LoadMoreButton extends React.Component {

          static propTypes = {
            lastPage: PropTypes.object.isRequired,
            onLoadMore: PropTypes.func.isRequired,
            nextPageMetaField: PropTypes.string.isRequired
          };

          render() {
            const {
              lastPage,
              onLoadMore,
              nextPageMetaField
            } = this.props;

            if(lastPage.state === PayloadStates.FETCHING) {
              return (
                <div className="footer">
                  <div className="loader"/>
                </div>
              );
            }

            if (!lastPage.meta[nextPageMetaField]) {
              return (
                <div className="footer"/>
              );
            }

            return (
              <div className="footer">
                <button className="btn btn-default btn-lg" onClick={onLoadMore}>
                  Load More
                </button>
              </div>
            );
          }
        }

        export default LoadMoreButton;
        `}/>
      </CodeTabs>

      <h3>
        Visual Check-in
      </h3>

      <p>
        If everything went well, your application should now look like this. Still exactly the same :)
      </p>

      <img className="drop-shadow" src={image} />


      <h2>
        Code Changes
      </h2>

      <p>
        Below is a list of files modified during this step.
      </p>

      <h3>
        config/connections.js
      </h3>

      <Markdown type="jsx" text={`
      import auth from '../src/utils/auth';

      export default {

        default: {

          apiRoot: 'http://localhost:1337',

          headers: function() {
            return {
              Authorization: \`Bearer \${auth.getToken()}\`
            };
          },

          collections: {
            properties: {
              parse: function(response) {
                this.meta = {
                  totalCount: response.meta.paginate.totalCount,
                  perPage: response.meta.paginate.perPage,
                  nextPage: response.meta.paginate.nextPage
                };
                return response.data;
              }
            }
          }

        }
      };
      `}/>

      <h3>
        src/components/LoadMoreButton.js
      </h3>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        import React from 'react';
        import createReactClass from 'create-react-class';
        import PropTypes from 'prop-types';
        import PayloadStates from '../constants/PayloadStates';

        export default createReactClass({
          displayName: 'LoadMoreButton',

          propTypes: {
            lastPage: PropTypes.object.isRequired,
            onLoadMore: PropTypes.func.isRequired,
            nextPageMetaField: PropTypes.string.isRequired
          },

          render() {
            const {
              lastPage,
              onLoadMore,
              nextPageMetaField
            } = this.props;

            if(lastPage.state === PayloadStates.FETCHING) {
              return (
                <div className="footer">
                  <div className="loader" />
                </div>
              );
            }

            if (!lastPage.meta[nextPageMetaField]) {
              return (
                <div className="footer" />
              );
            }

            return (
              <div className="footer">
                <button className="btn btn-default btn-lg" onClick={onLoadMore}>
                  Load More
                </button>
              </div>
            );
          }

        });
        `}/>
        <CodeTab syntax="ES6" text={`
        import React from 'react';
        import PropTypes from 'prop-types';
        import PayloadStates from '../constants/PayloadStates';

        class LoadMoreButton extends React.Component {

          render() {
            const {
              lastPage,
              onLoadMore,
              nextPageMetaField
            } = this.props;

            if(lastPage.state === PayloadStates.FETCHING) {
              return (
                <div className="footer">
                  <div className="loader" />
                </div>
              );
            }

            if (!lastPage.meta[nextPageMetaField]) {
              return (
                <div className="footer" />
              );
            }

            return (
              <div className="footer">
                <button className="btn btn-default btn-lg" onClick={onLoadMore}>
                  Load More
                </button>
              </div>
            );
          }

        }

        LoadMoreButton.propTypes = {
          lastPage: PropTypes.object.isRequired,
          onLoadMore: PropTypes.func.isRequired,
          nextPageMetaField: PropTypes.string.isRequired
        };

        export default LoadMoreButton;
        `}/>
        <CodeTab syntax="ESNext" text={`
        import React from 'react';
        import PropTypes from 'prop-types';
        import PayloadStates from '../constants/PayloadStates';

        class LoadMoreButton extends React.Component {

          static propTypes = {
            lastPage: PropTypes.object.isRequired,
            onLoadMore: PropTypes.func.isRequired,
            nextPageMetaField: PropTypes.string.isRequired
          };

          render() {
            const {
              lastPage,
              onLoadMore,
              nextPageMetaField
            } = this.props;

            if(lastPage.state === PayloadStates.FETCHING) {
              return (
                <div className="footer">
                  <div className="loader" />
                </div>
              );
            }

            if (!lastPage.meta[nextPageMetaField]) {
              return (
                <div className="footer" />
              );
            }

            return (
              <div className="footer">
                <button className="btn btn-default btn-lg" onClick={onLoadMore}>
                  Load More
                </button>
              </div>
            );
          }
        }

        export default LoadMoreButton;
        `}/>
      </CodeTabs>

      <h2>
        Next Steps
      </h2>

      <p>
        Next we'll <Link to="/quickstart/infinite-scrolling/step-2/">create the second component we'll need for Infinite Scrolling</Link>.
      </p>
    </Template>
  )
};

import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/pagination/final.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 2: Create Infinite Scrolling List
      </h1>

      <p>
        In this step we'll create the List component we'll need for infinite scrolling.
      </p>

      <QuickstartBranch branch="infinite-scrolling.2" />

      <h3>
        Create InfiniteScrollingList Component
      </h3>

      <p>
        The second component we'll create will be called <code>InfiniteScrollingList</code>, and it will be
        responsible for displaying our list of tweets, as well as merging all the pages of data into a single array.
      </p>

      <p>
        Create the component by running the following command:
      </p>

      <Markdown text={`
      lore generate component InfiniteScrollingList
      `}/>

      <p>
        Then modify the file to look like this:
      </p>

      <Markdown type="jsx" text={`
      import React from 'react';
      import createReactClass from 'create-react-class';
      import PropTypes from 'prop-types';
      import _ from 'lodash';
      import { getState } from 'lore-hook-connect';
      import PayloadStates from '../constants/PayloadStates';
      import LoadMoreButton from './LoadMoreButton';

      export default createReactClass({
        displayName: 'InfiniteScrollingList',

        propTypes: {
          row: PropTypes.func.isRequired,
          select: PropTypes.func.isRequired,
          selectNextPage: PropTypes.func,
          refresh: PropTypes.func,
          selectOther: PropTypes.func,
          exclude: PropTypes.func
        },

        getDefaultProps() {
          return {
            exclude: function(model) {
              return false;
            }
          };
        },

        getInitialState() {
          return {
            other: null,
            pages: []
          };
        },

        // fetch first page
        componentWillMount() {
          const { select, selectOther } = this.props;
          const nextState = this.state;

          nextState.pages.push(select(getState));

          if (selectOther) {
            nextState.other = selectOther(getState);
          }

          this.setState(nextState);
        },

        // refresh data in all pages
        componentWillReceiveProps(nextProps) {
          const { refresh, selectOther } = this.props;
          const { pages } = this.state;
          const nextState = {};

          if (refresh) {
            nextState.pages = pages.map(function(page) {
              return refresh(page, getState);
            });
          }

          if (selectOther) {
            nextState.other = selectOther(getState);
          }

          this.setState(nextState);
        },

        onLoadMore() {
          const { selectNextPage } = this.props;
          const { pages } = this.state;
          const lastPage = pages[pages.length - 1];

          pages.push(selectNextPage(lastPage, getState));

          this.setState({
            pages: pages
          });
        },

        render() {
          const { row, exclude, selectNextPage } = this.props;
          const { pages, other } = this.state;
          const numberOfPages = pages.length;
          const firstPage = pages[0];
          const lastPage = pages[pages.length - 1];

          // if we only have one page, and it's fetching, then it's the initial
          // page load so let the user know we're loading the data
          if (numberOfPages === 1 && lastPage.state === PayloadStates.FETCHING) {
            return (
              <div className="loader" />
            );
          }

          return (
            <div>
              <ul className="media-list tweets">
                {other ? other.data.map(row) : null}
                {_.flatten(pages.map((models) => {
                  return _.filter(models.data, (model) => {
                    return !exclude(model);
                  }).map(row);
                }))}
              </ul>
              {selectNextPage ? (
                <LoadMoreButton
                  lastPage={lastPage}
                  onLoadMore={this.onLoadMore}
                  nextPageMetaField="nextPage"
                />
              ) : null}
            </div>
          );
        }

      });
      `}/>

      <p>
        The component above is pretty generic. The props that start with <code>select*</code> are functions that
        we'll be providing to describe what data we want to display, and the <code>row</code> prop is a function
        that we'll provide to tell the List how to render each item in the array.
      </p>

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
        src/decorators/InfiniteScrolling.js
      </h3>

      <Markdown type="jsx" text={`
      import React from 'react';
      import createReactClass from 'create-react-class';
      import PropTypes from 'prop-types';
      import _ from 'lodash';
      import { getState } from 'lore-hook-connect';
      import PayloadStates from '../constants/PayloadStates';
      import LoadMoreButton from './LoadMoreButton';

      export default createReactClass({
        displayName: 'InfiniteScrollingList',

        propTypes: {
          row: PropTypes.func.isRequired,
          select: PropTypes.func.isRequired,
          selectNextPage: PropTypes.func,
          refresh: PropTypes.func,
          selectOther: PropTypes.func,
          exclude: PropTypes.func
        },

        getDefaultProps() {
          return {
            exclude: function(model) {
              return false;
            }
          };
        },

        getInitialState() {
          return {
            other: null,
            pages: []
          };
        },

        // fetch first page
        componentWillMount() {
          const { select, selectOther } = this.props;
          const nextState = this.state;

          nextState.pages.push(select(getState));

          if (selectOther) {
            nextState.other = selectOther(getState);
          }

          this.setState(nextState);
        },

        // refresh data in all pages
        componentWillReceiveProps(nextProps) {
          const { refresh, selectOther } = this.props;
          const { pages } = this.state;
          const nextState = {};

          if (refresh) {
            nextState.pages = pages.map(function(page) {
              return refresh(page, getState);
            });
          }

          if (selectOther) {
            nextState.other = selectOther(getState);
          }

          this.setState(nextState);
        },

        onLoadMore() {
          const { selectNextPage } = this.props;
          const { pages } = this.state;
          const lastPage = pages[pages.length - 1];

          pages.push(selectNextPage(lastPage, getState));

          this.setState({
            pages: pages
          });
        },

        render() {
          const { row, exclude, selectNextPage } = this.props;
          const { pages, other } = this.state;
          const numberOfPages = pages.length;
          const firstPage = pages[0];
          const lastPage = pages[pages.length - 1];

          // if we only have one page, and it's fetching, then it's the initial
          // page load so let the user know we're loading the data
          if (numberOfPages === 1 && lastPage.state === PayloadStates.FETCHING) {
            return (
              <div className="loader" />
            );
          }

          return (
            <div>
              <ul className="media-list tweets">
                {other ? other.data.map(row) : null}
                {_.flatten(pages.map((models) => {
                  return _.filter(models.data, (model) => {
                    return !exclude(model);
                  }).map(row);
                }))}
              </ul>
              {selectNextPage ? (
                <LoadMoreButton
                  lastPage={lastPage}
                  onLoadMore={this.onLoadMore}
                  nextPageMetaField="nextPage"
                />
              ) : null}
            </div>
          );
        }

      });
      `}/>

      <h2>
        Next Steps
      </h2>

      <p>
        Next we'll <Link to="/quickstart/infinite-scrolling/step-3/">convert the Feed to use Infinite Scrolling</Link>.
      </p>
    </Template>
  )
};

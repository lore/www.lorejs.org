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
      // src/components/InfiniteScrollingList.js
      import React, { useState } from 'react';
      import PropTypes from 'prop-types';
      import _ from 'lodash';
      import { useConnect } from '@lore/connect';
      import PayloadStates from '../constants/PayloadStates';
      import LoadMoreButton from './LoadMoreButton';
      
      InfiniteScrollingList.propTypes = {
        row: PropTypes.func.isRequired,
        select: PropTypes.func.isRequired,
        selectNextPage: PropTypes.func,
        refresh: PropTypes.func,
        selectOther: PropTypes.func,
        exclude: PropTypes.func
      };
      
      InfiniteScrollingList.defaultProps = {
        exclude: function(model) {
          return false;
        }
      };
      
      export default function InfiniteScrollingList(props) {
        const {
          row,
          exclude,
          select,
          refresh,
          selectNextPage,
          selectOther
        } = props;
      
        const connect = useConnect();
      
        const [pages, setPages] = useState([select(connect)]);
      
        let _pages = pages;
        let _other = null;
      
        // refresh data in all pages
        if (refresh) {
          _pages = pages.map(function(page) {
            return refresh(page, connect);
          });
        }
      
        // select other data if provided
        if (selectOther) {
          _other = selectOther(connect);
        }
      
        const numberOfPages = _pages.length;
        const firstPage = _pages[0];
        const lastPage = _pages[_pages.length - 1];
      
        // if we only have one page, and it's fetching, then it's the initial
        // page load so let the user know we're loading the data
        if (numberOfPages === 1 && lastPage.state === PayloadStates.FETCHING) {
          return (
            <div className="loader" />
          );
        }
      
        function onLoadMore() {
          _pages.push(selectNextPage(lastPage, connect));
          setPages(_pages);
        }
      
        return (
          <div>
            <ul className="media-list tweets">
              {_other ? _other.data.map(row) : null}
              {_.flatten(_pages.map((models) => {
                return _.filter(models.data, (model) => {
                  return !exclude(model);
                }).map(row);
              }))}
            </ul>
            {selectNextPage ? (
              <LoadMoreButton
                lastPage={lastPage}
                onLoadMore={onLoadMore}
                nextPageMetaField="nextPage"
              />
            ) : null}
          </div>
        );
      }
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
        If everything went well, your application should now look like this. Still exactly the same : )
      </p>

      <img className="drop-shadow" src={image} />


      <h2>
        Code Changes
      </h2>

      <p>
        Below is a list of files modified during this step.
      </p>

      <h3>
        src/components/InfiniteScrolling.js
      </h3>

      <Markdown type="jsx" text={`
      import React, { useState } from 'react';
      import PropTypes from 'prop-types';
      import _ from 'lodash';
      import { useConnect } from '@lore/connect';
      import PayloadStates from '../constants/PayloadStates';
      import LoadMoreButton from './LoadMoreButton';
      
      InfiniteScrollingList.propTypes = {
        row: PropTypes.func.isRequired,
        select: PropTypes.func.isRequired,
        selectNextPage: PropTypes.func,
        refresh: PropTypes.func,
        selectOther: PropTypes.func,
        exclude: PropTypes.func
      };
      
      InfiniteScrollingList.defaultProps = {
        exclude: function(model) {
          return false;
        }
      };
      
      export default function InfiniteScrollingList(props) {
        const {
          row,
          exclude,
          select,
          refresh,
          selectNextPage,
          selectOther
        } = props;
      
        const connect = useConnect();
      
        const [pages, setPages] = useState([select(connect)]);
      
        let _pages = pages;
        let _other = null;
      
        // refresh data in all pages
        if (refresh) {
          _pages = pages.map(function(page) {
            return refresh(page, connect);
          });
        }
      
        // select other data if provided
        if (selectOther) {
          _other = selectOther(connect);
        }
      
        const numberOfPages = _pages.length;
        const firstPage = _pages[0];
        const lastPage = _pages[_pages.length - 1];
      
        // if we only have one page, and it's fetching, then it's the initial
        // page load so let the user know we're loading the data
        if (numberOfPages === 1 && lastPage.state === PayloadStates.FETCHING) {
          return (
            <div className="loader" />
          );
        }
      
        function onLoadMore() {
          _pages.push(selectNextPage(lastPage, connect));
          setPages(_pages);
        }
      
        return (
          <div>
            <ul className="media-list tweets">
              {_other ? _other.data.map(row) : null}
              {_.flatten(_pages.map((models) => {
                return _.filter(models.data, (model) => {
                  return !exclude(model);
                }).map(row);
              }))}
            </ul>
            {selectNextPage ? (
              <LoadMoreButton
                lastPage={lastPage}
                onLoadMore={onLoadMore}
                nextPageMetaField="nextPage"
              />
            ) : null}
          </div>
        );
      }
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

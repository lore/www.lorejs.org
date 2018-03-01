import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/authorization/final.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Optimistic Updates: Overview
      </h1>

      <p>
        In this section we'll update our application to immediately display tweets that we create at the top of the
        feed, and we'll also address some of the challenges that we need to solve for when performing these types of
        optimistic updates.
      </p>

      <p>
        At the end of this section your application will look like this (visually identical):
      </p>

      <img className="drop-shadow" src={image} />

      <h3>
        What are optimistic updates?
      </h3>
      <p>
        Optimistic updates are the act of displaying changes to data before the server has confirmed that the
        desired create, update or delete action was successful.
      </p>
      <p>
        For example, when a user creates a tweet, it takes time for that request to be sent to the API server, get
        saved to the database, and make it back to the browser to confirm the tweet was created.
      </p>
      <p>
        If an application chooses to wait until the server confirms the request before displaying the tweet, then
        it has a couple options for what type of experience to provide:
      </p>
      <ul>
        <li>
          <p>
            One option is to display a "saving experience" to the user, and prevent them from interacting with
            the application further until the request comes back.
          </p>
        </li>
        <li>
          <p>
            Another is to submit the request, but make no changes to the application until the request comes
            back, at which point the data will suddenly "show up" in the application.
          </p>
        </li>
      </ul>
      <p>
        The first experience asks the user to wait, but makes it fairly straight forward
        to communicate and address errors if one occurs.
      </p>
      <p>
        The second experience does <em>not</em> ask the user to wait, but it does makes error handling more difficult,
        and can also make the application feel unresponsive and "broken" depending on how long the request takes.
      </p>
      <p>
        A third option is to <strong>display changes to data as soon as they're submitted</strong>, meaning that
        when the user creates data, you insert into the application immediately, and if they update or delete data,
        you show that change as if it's instantaneous.
      </p>
      <p>
        This type of experience is referred to as an "optimistic update" because we're optimistic the request will
        be successful, and are comfortable showing the user an experience that assumes it will be.
      </p>
      <p>
        It's not appropriate for all situations, and it doesn't necessarily make error handling any easier, but it
        can provide a feeling of responsiveness to the application. And that's what we'll be exploring in this
        section.
      </p>

      <h2>
        Next Steps
      </h2>

      <p>
        Ready? Let's <Link to="../step-1/">get started</Link>!
      </p>
    </Template>
  )
};

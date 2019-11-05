import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Code from '../../../components/Code';
import QuickstartBranch from '../../../components/QuickstartBranch';
import doubleBackdropImage from '../../../assets/images/quickstart/dialogs/double-backdrop.png';
import image from '../../../assets/images/quickstart/dialogs/step-3.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 4: Simplify the Dialog
      </h1>

      <p>
        In this step we're going to create a template for reducing some of the boilerplate associated with
        mounting, showing, and dismissing Bootstrap dialogs.
      </p>

      <QuickstartBranch branch="dialogs.4" />

      <h3>
        What's the problem?
      </h3>
      <p>
        The dialog we just created is responsible for showing and dismissing itself. But in a real application, you
        may have dozens of dialogs for creating, updating and deleting content. And if your application uses a
        UI library like Bootstrap, each of those dialogs will likely have the <strong>exact same code for
        doing so</strong>.
      </p>
      <p>
        So in this step, we're just going to embrace that, and create a template that has been customized to
        understand how to show and dismiss Bootstrap dialogs.
      </p>

      <h3>
        Create Dialog Template
      </h3>
      <p>
        Create a new component in <code>src/dialogs</code> called <code>Dialog</code> and replace it with
        this code:
      </p>

      <Code type="jsx" text={`
      // src/dialogs/Dialog.js
      import React, { useEffect, useRef } from 'react';
      import PropTypes from 'prop-types';
      
      export default function Dialog(props) {
        const modalRef = useRef(null);
      
        useEffect(() => {
          show();
        }, []);
      
        function show() {
          $(modalRef.current).modal('show');
        }
      
        function dismiss() {
          $(modalRef.current).modal('hide');
        }
      
        return (
          <div ref={modalRef} className="modal fade">
            {React.cloneElement(props.children, {
              dismiss: dismiss
            })}
          </div>
        );
      }
      `}/>

      <p>
        Next we're going to register this template with the <code>useDialog()</code> so that all dialogs use it
        as the default. Open <code>config/dialogs.js</code> and update the configuration to look like this:
      </p>

      <Code text={`
      // config/dialogs.js
      import { getConfig } from '@lore/dialogs';
      import Dialog from '../src/dialogs/Dialog';
      
      export default getConfig({
      
        templates: {
          default: Dialog
        }
      
      })
      `}/>

      <p>
        With that change in place, the application will still work, but you'll notice that now when you launch the
        dialog, it now has a super dark backdrop that it didn't before.
      </p>

      <img className="drop-shadow" src={doubleBackdropImage} />

      <h3>
        Why does this happen?
      </h3>
      <p>
        This is happening because we're now creating <strong>two</strong> backdrops. Previously, our dialog needed to
        include code for showing and hiding itself, and it's this code (shown below) that also generates the
        backdrop:
      </p>

      <Code type="jsx" text={`
      // src/dialogs/CreateTweetDialog.js
      ...
      export default function CreateTweetDialog(props) {
        ...
        useEffect(() => {
          show();
        }, []);
      
        function show() {
          $(modalRef.current).modal('show');
        }
      
        function dismiss() {
          $(modalRef.current).modal('hide');
        }
        
        ...

        return (
          <div ref="modal" className="modal fade">
            {/* ...your dialog renders here... */}
          </div>
        );
      }
      `}/>

      <p>
        By registering the new template, we've set made is the <code>show()</code> method automatically wraps
        each dialog with this code for us, so we can now remove this boilerplate from <em>our</em> dialog.
      </p>

      <h3>
        Remove Boilerplate from Dialog
      </h3>

      <p>
        Open the <code>CreateTweetDialog</code> and update it to look like this:
      </p>

      <Code type="jsx" text={`
      // src/dialogs/CreateTweetDialog.js
      import React, { useState } from 'react';
      import PropTypes from 'prop-types';
      import _ from 'lodash';
      import { useActions } from '@lore/actions';
      
      export default function CreateTweetDialog(props) {
        const { dismiss } = props;
      
        const [data, setData] = useState({
          text: ''
        });
      
        const actions = useActions();
      
        function request(data) {
          actions.tweet.create(data);
        }
      
        function onSubmit() {
          request(data);
          dismiss();
        }
      
        function onChange(name, value) {
          const nextData = _.cloneDeep(data);
          nextData[name] = value;
          setData(nextData);
        }
      
        return (
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" onClick={dismiss}>
                  <span>&times;</span>
                </button>
                <h4 className="modal-title">
                  Create Tweet
                </h4>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Message</label>
                      <textarea
                        className="form-control"
                        rows="3"
                        value={data.text}
                        placeholder="What's happening?"
                        onChange={(event) => {
                          onChange('text', event.target.value)
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="row">
                  <div className="col-md-12">
                    <button
                      type="button"
                      className="btn btn-default"
                      onClick={dismiss}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      disabled={!data.text}
                      onClick={onSubmit}
                    >
                      Create
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
      `}/>

      <p>
        With that change in place, if you launch your dialog again, it will look and behave like we expect, and
        will once again have only a single backdrop.
      </p>

      <h3>
        Visual Check-in
      </h3>

      <p>
        If everything went well, your application should now look like this.
      </p>

      <img className="drop-shadow" src={image} />

      <h2>
        Code Changes
      </h2>

      <p>
        Below is a list of files modified during this step.
      </p>

      <h3>
        config/dialogs.js
      </h3>
      <Code text={`
      import { getConfig } from '@lore/dialogs';
      import Dialog from '../src/dialogs/Dialog';
      
      export default getConfig({
        templates: {
          default: Dialog
        }
      })
      `}/>

      <h3>
        src/dialogs/Dialog.js
      </h3>
      <Code type="jsx" text={`
      import React, { useEffect, useRef } from 'react';
      import PropTypes from 'prop-types';
      
      export default function Dialog(props) {
        const modalRef = useRef(null);
      
        useEffect(() => {
          show();
        }, []);
      
        function show() {
          $(modalRef.current).modal('show');
        }
      
        function dismiss() {
          $(modalRef.current).modal('hide');
        }
      
        return (
          <div ref={modalRef} className="modal fade">
            {React.cloneElement(props.children, {
              dismiss: dismiss
            })}
          </div>
        );
      }
      `}/>

      <h3>
        src/dialogs/CreateTweetDialog.js
      </h3>
      <Code type="jsx" text={`
      import React, { useState } from 'react';
      import PropTypes from 'prop-types';
      import _ from 'lodash';
      import { useActions } from '@lore/actions';
      
      export default function CreateTweetDialog(props) {
        const { dismiss } = props;
      
        const [data, setData] = useState({
          text: ''
        });
      
        const actions = useActions();
      
        function request(data) {
          actions.tweet.create(data);
        }
      
        function onSubmit() {
          request(data);
          dismiss();
        }
      
        function onChange(name, value) {
          const nextData = _.cloneDeep(data);
          nextData[name] = value;
          setData(nextData);
        }
      
        return (
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" onClick={dismiss}>
                  <span>&times;</span>
                </button>
                <h4 className="modal-title">
                  Create Tweet
                </h4>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Message</label>
                      <textarea
                        className="form-control"
                        rows="3"
                        value={data.text}
                        placeholder="What's happening?"
                        onChange={(event) => {
                          onChange('text', event.target.value)
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="row">
                  <div className="col-md-12">
                    <button
                      type="button"
                      className="btn btn-default"
                      onClick={dismiss}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      disabled={!data.text}
                      onClick={onSubmit}
                    >
                      Create
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
      `}/>

      <h2>
        Next Steps
      </h2>

      <p>
        Next we're going to <Link to="/quickstart/dialogs/step-5/">create a way to edit tweets</Link>.
      </p>
    </Template>
  )
};

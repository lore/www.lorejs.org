import React from 'react';
import languageUtil from '../utils/language';
import Code from './Code';
let count = 0;

export default class CodeTabs extends React.Component {

  componentWillMount() {
    try {
      this.setState({
        language: languageUtil.getLanguage()
      })
    } catch(error) {
      this.setState({
        language: 'ES6'
      })
    }
  }

  setLanguage(language) {
    languageUtil.saveLanguage(language);
    this.setState({
      language: language
    });
  }

  render() {
    const { children } = this.props;
    const { language } = this.state;

    const tabs = [];
    const content = [];

    React.Children.map(children, function(child) {
      const {
        title,
        syntax,
        type,
        text,
        active
      } = child.props;
      count = count + 1;
      tabs.push(
        <li key={count} role="presentation" className={language === syntax || active ? 'active' : ''}>
          <a href={`#tab-${count}`} role="tab" data-toggle="tab" aria-expanded="false">
            {title || syntax}
          </a>
        </li>
      );

      content.push(
        <div key={count} role="tabpanel" className={'tab-pane' + (language === syntax || active ? ' active' : '')} id={`tab-${count}`}>
          <Code
            type={type}
            text={_.replace(text, /\n        /g, '\n      ')}
          />
        </div>
      );
    });

    return (
      <div className="code-tabs">
        <ul className="nav nav-tabs" role="tablist">
          {tabs}
        </ul>
        <div className="tab-content">
          {content}
        </div>
      </div>
    );
  }
};

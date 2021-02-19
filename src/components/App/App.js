import React from 'react';
// Components
import Icon from 'components/shared/Icon/Icon';
// Styles
import s from './App.module.scss';

function App() {
  return (
    <div className="wmnds-container wmnds-p-t-lg wmnds-p-b-lg wmnds-grid">
      <div className="wmnds-col-1">
        <h2>Hello West Midlands!</h2>
        <p>Don&apos;t forget to:</p>
        <ul>
          <li>
            Update the{' '}
            <a
              href="https://designsystem.wmnetwork.co.uk/docs/get-started/production/"
              target="_blank"
              rel="noreferrer"
            >
              WMN Design System CSS to the latest version
            </a>{' '}
            on <strong>line:51 of index.html</strong>
          </li>
          <li>Change the page title</li>
          <li>Change meta title and description</li>
          <li>Update the breadcrumbs</li>
        </ul>

        {/* Bus */}
        <Icon className={`${s.icon} wmnds-col-1 wmnds-col-sm-1-3`} iconName="modes-isolated-bus" />
        {/* Metro */}
        <Icon
          className={`${s.icon} wmnds-col-1 wmnds-col-sm-1-3`}
          iconName="modes-isolated-metro"
        />
        {/* Train */}
        <Icon className={`${s.icon} wmnds-col-1 wmnds-col-sm-1-3`} iconName="modes-isolated-rail" />
      </div>
    </div>
  );
}

export default App;

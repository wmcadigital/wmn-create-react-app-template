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
            Update the variables in <strong>.env</strong> file
          </li>
          <li>
            Update the <strong>breadcrumbs</strong>
          </li>
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

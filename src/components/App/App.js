import React from 'react';
// Components
import Icon from 'components/shared/Icon/Icon';
// Styles
import s from './App.module.scss';

function App() {
  return (
    <div className="wmnds-container wmnds-p-t-lg wmnds-p-b-lg wmnds-grid">
      <h2 className="wmnds-col-1">Hello West Midlands!</h2>
      <div className="wmnds-col-1">
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

import React from 'react';
// Components
import Icon from 'components/shared/Icon/Icon';
// Styles
import s from './App.module.scss';

function App() {
  return (
    <div className="wmnds-container wmnds-p-t-lg wmnds-p-b-lg wmnds-grid">
      <Icon className={s.icon} iconName="modes-isolated-bus" />
      <Icon className={s.icon} iconName="modes-isolated-metro" />
      <Icon className={s.icon} iconName="modes-isolated-rail" />
    </div>
  );
}

export default App;

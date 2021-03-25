import React from 'react';
import Header from './Header';
import './index.less';

export default function Layout(): JSX.Element {
  return (
    <div className="app-container">
      <Header />
      <div className="app-body">
        <div className="app-menu">
          <div>
            menus
          </div>
        </div>
        <div className="app-content">
          <div>
            content
          </div>
        </div>
      </div>
    </div>
  );
}

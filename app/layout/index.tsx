import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStore from './global-store';
import PCLayout from './pc';
import MobileLayout from './mobile';

export default function AppLayout(): JSX.Element {
  const { isMobile, apps } = GlobalStore.useContainer();

  console.log('apps :>> ', apps);

  return (
    <Router>
      {isMobile ? <MobileLayout /> : <PCLayout />}
    </Router>
  );
}
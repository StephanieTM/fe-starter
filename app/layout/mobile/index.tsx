import React from 'react';
import Footer from './Footer';
import './index.less';

export default function Layout(): JSX.Element {
  return (
    <div className="app-container">
      <div className="hello">
        <div>Hello!</div>
        <div>こにちわ!</div>
      </div>
      <Footer />
    </div>
  );
}

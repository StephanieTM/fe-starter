import React from 'react';
import ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import AppLayout from './layout';
import GlobalStore from './layout/global-store';
import './utils/axios-config';
import './index.less';

dayjs.locale('zh-cn');

function App(): JSX.Element {
  return (
    <GlobalStore.Provider>
      <AppLayout />
    </GlobalStore.Provider>
  );
}

const HotApp = hot(App);

ReactDom.render(
  <HotApp />,
  document.getElementById('app')
);

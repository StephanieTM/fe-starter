import React from 'react';
import ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { theme } from './theme';
import { configAxios } from './config/axios-config';
import AppLayout from './layout';
import GlobalStore from './layout/global-store';
import './index.less';

configAxios();
dayjs.locale('zh-cn');

function App(): JSX.Element {
  return (
    <GlobalStore.Provider>
      <ChakraProvider theme={theme}>
        <Router>
          <AppLayout />
        </Router>
      </ChakraProvider>
    </GlobalStore.Provider>
  );
}

const HotApp = hot(App);

ReactDom.render(
  <HotApp />,
  document.getElementById('app')
);

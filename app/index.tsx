import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Provider, useDispatch } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { theme } from './theme';
import { configAxios } from './config/axios-config';
import { Dispatch, store } from './store';
import AppLayout from './layout';
import './index.less';

configAxios();
dayjs.locale('zh-cn');

function App(): JSX.Element {
  const isMobile = useMediaQuery({ query: '(max-width: 540px)' });
  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    dispatch.global.setIsMobile(isMobile);
  }, [dispatch.global, isMobile]);

  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Router>
          <AppLayout />
        </Router>
      </ChakraProvider>
    </Provider>
  );
}

function WrappedApp(): JSX.Element {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

const HotApp = hot(WrappedApp);

ReactDom.render(
  <HotApp />,
  document.getElementById('app')
);

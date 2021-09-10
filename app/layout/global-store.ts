import { useMemo, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { createContainer } from 'unstated-next';
import { IRouteConfig, routes } from '../routers/routes';
import { getApplication } from './utils';
import { IValue, IApplication } from './interface';

const appList = getApplication(routes);

function useGlobalStore(): IValue {
  const isMobile = useMediaQuery({ query: '(max-width: 540px)' });
  const apps = useMemo(() => {
    return appList;
  }, []);
  const [currentApp, setCurrentApp] = useState<IApplication|Record<string, never>>(apps[0] || {});
  const [appDrawerVisible, setAppDrawerVisible] = useState<boolean>(false);
  const menus = useMemo<IRouteConfig[]>(() => {
    return ((currentApp as IApplication).menus || []);
  }, [currentApp]);

  return {
    apps,
    menus,
    currentApp,
    setCurrentApp,
    appDrawerVisible,
    setAppDrawerVisible,
    isMobile,
  };
}

export default createContainer<IValue>(useGlobalStore);

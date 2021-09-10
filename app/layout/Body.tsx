import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react';
import { useClassName } from 'app/utils';
import { IBodyProps } from './interface';

export default function Body(props: IBodyProps): JSX.Element {
  const { routes } = props;
  const c = useClassName();
  const spinner = (
    <div className={c('app-body-spinner')}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="brand.200"
        color="brand.500"
        size="lg"
      />
    </div>
  );

  return (
    <div className={c('app-body-container')}>
      <div className={c('app-body-content')}>
        <div className={c('app-body-route')}>
          <Suspense fallback={spinner}>
            <Switch>
              {
                routes.map(route => (route.component && route.link) ? (
                  <Route
                    key={route.link}
                    exact
                    path={route.link}
                    component={lazy(route.component)}
                  />
                ) : null)
              }
            </Switch>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

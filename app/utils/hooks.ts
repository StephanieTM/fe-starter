import { useCallback } from 'react';
import GlobalStore from 'app/layout/global-store';

export function useClassName(): (className: string) => string {
  const { isMobile } = GlobalStore.useContainer();

  return useCallback((className: string): string => {
    return `${className} ${className}-${isMobile ? 'mobile' : 'pc'}`;
  }, [isMobile]);
}

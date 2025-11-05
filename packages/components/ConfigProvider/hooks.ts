import { useContext } from 'react';
import { useLocale } from '@pixel-ui-react/hooks';
import { en } from '@pixel-ui-react/locale'

import { ConfigProviderContext } from './context';

export const useIsInIntlProvider = (): boolean => {
  const configProviderContext = useContext(ConfigProviderContext)

  return configProviderContext?._InConfigProvider ?? false;
}

const defaultI18n = (key: string) => {
  return (en as unknown as Record<string, string>)[key] ?? key;
};

export const useI18n = (): ((key: string) => string) => {
  const isInIntlProvider = useIsInIntlProvider();
  return isInIntlProvider ? useLocale() : defaultI18n;
}
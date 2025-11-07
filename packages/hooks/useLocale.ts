import { useIntl } from 'react-intl';

export const useLocale = () => {
  const intl = useIntl()
  return (key: string) => intl.formatMessage({ id: key })
}

export default useLocale

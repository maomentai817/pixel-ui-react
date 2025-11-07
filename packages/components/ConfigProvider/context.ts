import { createContext } from 'react';

const ConfigProviderContext = createContext<{ locale: string, _InConfigProvider: boolean } | null>(null)

export { ConfigProviderContext };
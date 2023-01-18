import React, { createContext, ReactNode, useContext } from 'react';
import { DEFAULT_THEME } from './default-theme';
import { UsineTheme } from './types';

interface UsineProviderContextType {
  theme?: UsineTheme;
}

const UsineProviderContext = createContext<UsineProviderContextType>({
  theme: DEFAULT_THEME,
});

export function useUsineTheme() {
  return useContext(UsineProviderContext)?.theme || DEFAULT_THEME;
}

export interface UsineProviderProps {
  theme?: UsineTheme;
  children: ReactNode;
}

export function UsineProvider({
  theme,
  children,
}: UsineProviderProps) {
  // const ctx = useContext(UsineProviderContext);
  return (
    <UsineProviderContext.Provider value={{theme}}>
      {children}
    </UsineProviderContext.Provider>
  );
}

import { ReactNode } from 'react';
import { UIProvider } from './UIContext';

interface ProviderProps {
  children: ReactNode;
}

export const Provider = ({ children }: ProviderProps) => <UIProvider>{children}</UIProvider>;

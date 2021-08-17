import React, { useEffect, useState, createContext, useContext, ReactNode } from 'react';
import { DefaultTheme, ThemeContext } from 'styled-components';

import { ToastContainer, toast } from 'react-toastify';

import { AlertTypes } from './types/alert';

interface InitialState {
  theme: DefaultTheme;
  responsive: boolean;
  alert: (message: string, type: AlertTypes) => void;
}

export const UIContext = createContext({} as InitialState);

interface UIProviderProps {
  children: ReactNode;
}

export const UIProvider = ({ children }: UIProviderProps) => {
  const theme = useContext(ThemeContext);
  const [responsive, setResponsive] = useState(false);

  const alert = (message: string, type: AlertTypes) => toast(message, { type });

  useEffect(() => {
    if (window.innerWidth < theme.breakpoints.md) {
      setResponsive(true);
    }
  }, [responsive]);

  return (
    <UIContext.Provider value={{ responsive, alert, theme }}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {children}
    </UIContext.Provider>
  );
};

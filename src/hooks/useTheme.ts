import { useContext } from 'react';
import { UIContext } from 'context/userInterface';

export const useTheme = () => {
  const { theme } = useContext(UIContext);

  return {
    theme,
  };
};

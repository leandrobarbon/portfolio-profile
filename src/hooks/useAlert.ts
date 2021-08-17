import { useContext } from 'react';

import { UIContext } from 'context/userInterface';

export const useAlert = () => {
  const { alert } = useContext(UIContext);

  return {
    alert,
  };
};

import { createContext, useContext } from 'react';

/** @type {React.Context<import('../types/mandal.js').Mandal | null>} */
const MandalContext = createContext(null);

/**
 * Provider component for Mandal data.
 * Wraps the Mandal page and makes data available to all children.
 */
export function MandalProvider({ mandal, children }) {
  return (
    <MandalContext.Provider value={mandal}>
      {children}
    </MandalContext.Provider>
  );
}

/**
 * Hook to access the current Mandal data.
 * Must be used within a MandalProvider.
 * @returns {import('../types/mandal.js').Mandal}
 */
export function useMandal() {
  const mandal = useContext(MandalContext);
  if (!mandal) {
    throw new Error('useMandal must be used within a MandalProvider');
  }
  return mandal;
}

import { useMemo, useState } from 'react';

/**
 * This is a simple store pattern that allows for shallow state updates
 * https://medium.com/@jbyj/okay-so-react-usestate-sucks-ef756cfce516
 *
 * in practice u dont need to create a realy mess object with a couple of states, just one
 */

export type ShallowState<T> = {
  [P in keyof T]: Readonly<T[P]>;
};

export function useStore<S extends object>(initialState: S | (() => S)): ShallowState<S> {
  const [state, setState] = useState(initialState);
  // We'll create a new proxy object for each new state. This will allow passing the proxy down to bypass bailouts on equal comparison on props
  return useMemo(
    () =>
      new Proxy<S>(state, {
        set: (target: S, prop: string | symbol, value: any) => {
          // Only really care about setting state, so do a partial set based on the key
          setState((prevState: S) => ({ ...prevState, [prop]: value }));
          return true;
        },
      }),
    [state, setState],
  );
}

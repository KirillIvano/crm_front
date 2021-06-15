import {DependencyList, useRef} from 'react';


const areDepsEqual = (a: DependencyList, b: DependencyList) =>
    a.length === b.length && !a.some((el, i) => el !== b[i]);

export const useSyncEffect = (handler: () => void, deps: DependencyList) => {
    const prevDeps = useRef<DependencyList>(deps);
    const firstRender = useRef<boolean>(true);

    if (!areDepsEqual(deps, prevDeps.current) || firstRender.current) {
        handler();

        if (firstRender.current) {
            firstRender.current = false;
        }
    }
};

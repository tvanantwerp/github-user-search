import { useEffect, useCallback, DependencyList } from 'react';

export const useDebounce = (theFunction: any, deps: DependencyList, time: number): void => {
	const callback = useCallback(theFunction, [...deps, theFunction]);

	useEffect(() => {
		const timer = setTimeout(callback, time);

		return () => {
			clearTimeout(timer);
		};
	}, [callback, time]);
};

export default useDebounce;

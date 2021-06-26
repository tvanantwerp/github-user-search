import { useEffect, useCallback, DependencyList } from 'react';

export const useDebounce = (theFunction: any, deps: DependencyList, time: number): void => {
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const callback = useCallback(theFunction, deps);

	useEffect(() => {
		const timer = setTimeout(callback, time);

		return () => {
			clearTimeout(timer);
		};
	}, [callback, time]);
};

export default useDebounce;

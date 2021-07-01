import { useEffect, useCallback, useRef, DependencyList } from 'react';

export const useDebounce = (theFunction: any, deps: DependencyList, time: number): void => {
	const didRender = useRef(false);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const callback = useCallback(theFunction, deps);

	useEffect(() => {
		if (didRender.current === true) {
			const timer = setTimeout(callback, time);

			return () => {
				clearTimeout(timer);
			};
		} else {
			didRender.current = true;
		}
	}, [callback, time]);
};

export default useDebounce;

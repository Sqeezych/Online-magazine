import { useAppSelector } from '../hooks';
import { server } from '../bff';
import { selectUserSession } from '../selectors';
import { OPERATIONS_WITH_SESSION } from '../constants';

type DropFirst<T> = T extends [unknown, ...infer Rest] ? Rest : T;

type ParamsProps<T extends keyof typeof server> =
	T extends typeof OPERATIONS_WITH_SESSION[number]
	? DropFirst<Parameters<typeof server[T]>> : Parameters<typeof server[T]>;

type ReturnHookType<T extends keyof typeof server> = ReturnType<typeof server[T]>;

export const useServerRequest = () => {
	const session = useAppSelector(selectUserSession);

	return <T extends keyof typeof server>(operation: T, ...params: ParamsProps<T>): ReturnHookType<T> => {
		if (OPERATIONS_WITH_SESSION.includes(operation as typeof OPERATIONS_WITH_SESSION[number])) {
			return (server[operation] as Function)(session, ...params) as ReturnHookType<T>;
		} else {
			return (server[operation] as Function)(...params) as ReturnHookType<T>;
		}
	};
};

const createOutOfContextHandler = (message='Элемент был использован вне контекста') =>
    () => {throw new Error(message);};


export const wrapDefaultContext = <T extends Record<string | symbol, unknown>>(obj: T, message?: string): T => {
    const outOfContextHandler = createOutOfContextHandler(message);

    return Object.getOwnPropertyNames(obj)
        .reduce(
            (acc: Record<string, unknown>, name) => {
                if (typeof obj[name] === 'function') {
                    acc[name] = outOfContextHandler;
                } else {
                    Object.defineProperty(acc, name, {get: outOfContextHandler});
                }

                return acc;
            },
            {},
        ) as unknown as T;
};


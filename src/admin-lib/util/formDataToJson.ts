export const formDataToJson = (data: FormData) => {
    const result: Record<string, File | string | null> = {};

    for (const key of data.keys()) {
        result[key] = data.get(key);
    }

    return JSON.stringify(result);
};

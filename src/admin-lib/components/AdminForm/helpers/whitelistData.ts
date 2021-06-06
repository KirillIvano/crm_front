export const whitelistData = (data: FormData, keys?: string[]) => {
    if (keys) {
        const res = new FormData();

        for (const key of keys) {
            const val = data.get(key);
            val && res.set(key, val);
        }
    }

    return data;
};

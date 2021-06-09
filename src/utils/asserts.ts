export class AssertExistsError extends Error {}

export function assertExists<T,>(val: T | undefined): asserts val is T {
    if (val === undefined) {
        throw new AssertExistsError();
    }
}

export const tryValue = <T,>(val: T | undefined): T => {
    assertExists(val);

    return val;
};

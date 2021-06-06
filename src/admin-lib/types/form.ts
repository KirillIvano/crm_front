export type Validator<TVal,> = {value: TVal; message?: string} | TVal;

export type RequiredValidator = Validator<boolean>;
export type PatternValidator = Validator<RegExp>;
export type ValidateValidator = Validator<(value: string) => boolean>;

export type FieldValidators = {
    required?: RequiredValidator,
    pattern?: PatternValidator,
    validate?: ValidateValidator;
}

export type FormValidators<TBody = Record<string, string | Blob>> = Record<
    keyof TBody,
    FieldValidators
>;

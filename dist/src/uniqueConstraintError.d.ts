import { ValidationError } from "./validationError";
export declare class UniqueConstraintError extends ValidationError {
    message: string;
    errors: string[];
    constructor(message: string, errors: string[]);
}

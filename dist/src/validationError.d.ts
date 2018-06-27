import { BaseError } from "./baseError";
export declare class ValidationError extends BaseError {
    message: string;
    errors: string[];
    constructor(message: string, errors: string[]);
}

import { BaseError } from "./baseError";
export declare class NotFoundError extends BaseError {
    message: string;
    constructor(message: string);
}

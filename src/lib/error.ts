export class HttpError extends Error {
    public data: any;
    public code: number;

    constructor(message: string, data: any, code: number) {
        super(message);
        this.data = data;
        this.code = code;
        this.name = 'HttpError';
        Object.setPrototypeOf(this, HttpError.prototype);
    }
}
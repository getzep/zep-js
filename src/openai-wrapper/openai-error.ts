export class ZepOpenAIError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ZepOpenAIError";
    }
}
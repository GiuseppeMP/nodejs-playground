export default class ValidationError extends Error {
    constructor(reason: string) {
        super(reason)
    }
}

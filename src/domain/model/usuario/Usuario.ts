export default class Usuario {

    private _nome: string

    constructor(nome: string) {
        if (!nome.trim()) {
            throw new Error("Nome inválido");
        }
        if (/\d/.test(nome)) {
            throw new Error("Nome não pode conter números")
        }
        this._nome = nome.trim().replace(/\s+/g, ' ')
    }

    public get nome(): string {
        return this._nome
    }
}

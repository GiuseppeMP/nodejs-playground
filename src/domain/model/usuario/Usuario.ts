export default class Usuario {

    private _nome: string

    constructor(nome: string) {
        if (!nome.trim()) {
            throw new Error("Nome inválido");
        }
        this._nome = nome;
    }

    public get nome(): string {
        return this._nome
    }
}

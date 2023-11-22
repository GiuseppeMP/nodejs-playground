import ValidationError from "../shared/validation-error/ValidationError";

export default class Usuario {

    private _nome: string

    constructor(nome: string) {
        const nomeTrim = nome.trim()

        if (nomeTrim.length < 3) {
            throw new ValidationError("Nome inválido, deve conter pelo menos 3 caracteres");
        }
        if (/\d/.test(nome)) {
            throw new ValidationError("Nome não pode conter números")
        }
        if (/[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~]/.test(nome)) {
            throw new ValidationError("Nome não pode conter caracteres especiais")
        }

        this._nome = nomeTrim.replace(/\s+/g, ' ')
    }

    public get nome(): string {
        return this._nome
    }
}

import ValidationError from '../shared/validation-error/ValidationError'

export enum UsuarioValidacoes {
  NOME_TAMANHO_INVALIDO = 'Nome inválido, deve conter pelo menos 3 caracteres',
  NOME_CONTEM_NUMEROS = 'Nome não pode conter números',
  NOME_CONTEM_CARACTERES_ESPECIAIS = 'Nome não pode conter caracteres especiais'
}

export default class Usuario {
  private readonly _nome: string

  constructor (nome: string) {
    const nomeTrim = nome.trim()

    const erros = []

    if (nomeTrim.length < 3) {
      erros.push(UsuarioValidacoes.NOME_TAMANHO_INVALIDO)
    }
    if (/\d/.test(nomeTrim)) {
      erros.push(UsuarioValidacoes.NOME_CONTEM_NUMEROS)
    }
    if (/[`!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?~]/.test(nomeTrim)) {
      erros.push(UsuarioValidacoes.NOME_CONTEM_CARACTERES_ESPECIAIS)
    }

    if (erros.length > 0) {
      throw new ValidationError(erros.join())
    }

    this._nome = nomeTrim.replace(/\s+/g, ' ')
  }

  public get nome (): string {
    return this._nome
  }
}

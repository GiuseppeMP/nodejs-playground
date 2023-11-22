import ValidationError from "../shared/validation-error/ValidationError";
import Usuario from "./Usuario";

describe('Dado que estamos criando Usuarios', () => {
    const nomes_validos = ['Giuseppe', 'Fulano', 'Ana', 'NomeBugY', ' Beppe', ' Beppe ', 'Beppe ', 'Giuseppe  Matheus']
    const nomes_invalidos_tamanho_minimo = ['', '     ', ' ii ' , 'ii', 'j']
    const nomes_invalidos_com_numeros = ['Beppe123', '123Beppe', '1234', '983124']
    const nomes_invalidos_com_simbolos = ['beppe@mp', '@$!@#-']

    describe.each(nomes_validos)(`quando usamos dados obrigatorios: nome=%s`, (nome_valido) => {
        const usuario = new Usuario(nome_valido)
        test(`então o usuario criado deve ter nome=${nome_valido}`, () => {
            expect(usuario.nome).toBe(nome_valido.trim().replace(/\s+/g, ' '))
        })
    })

    describe.each(nomes_invalidos_tamanho_minimo)(`quando usamos nomes invalidos tamanho: nome=[%s]`, (nome_invalido) => {
        test('então devera ocorrer um erro', () => {
            const criarUsuario = () => new Usuario(nome_invalido)
            expect(criarUsuario).toThrow('Nome inválido, deve conter pelo menos 3 caracteres')
            expect(criarUsuario).toThrow(ValidationError)
        })
    })

    describe.each(nomes_invalidos_com_numeros)(`quando usamos nomes com números ex: nome=[%s]`, (nome_invalido) => {

        const erro_esperado_nome_com_numero = 'Nome não pode conter números';

        test(`então devera ocorrer um erro com a mensagem:
                ${erro_esperado_nome_com_numero}`, () => {

            const criarUsuario = () => new Usuario(nome_invalido)
            expect(criarUsuario).toThrow(erro_esperado_nome_com_numero)
            expect(criarUsuario).toThrow(ValidationError)
        })
    })

    describe.each(nomes_invalidos_com_simbolos)(`quando usamos nomes com simbolos ex: nome=[%s]`, (nome_invalido) => {

        const erro_esperado_nome_com_simbolos = 'Nome não pode conter caracteres especiais';

        test(`então devera ocorrer um erro com a mensagem:
                ${erro_esperado_nome_com_simbolos}`, () => {

            const criarUsuario = () => new Usuario(nome_invalido)
            expect(criarUsuario).toThrow(erro_esperado_nome_com_simbolos)
            expect(criarUsuario).toThrow(ValidationError)
        })
    })
})

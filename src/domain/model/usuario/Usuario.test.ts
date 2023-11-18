import Usuario from "./Usuario";

describe('Dado que estamos criando Usuarios', () => {
    const nomes_validos = ['Giuseppe', 'Fulano', 'Ana', 'NomeBugY']
    const nomes_invalidos = ['', '     ',]

    describe.each(nomes_validos)(`quando usamos dados obrigatorios: nome=%s`, (nome_valido) => {

        const usuario = new Usuario(nome_valido)

        test(`então o usuario criado deve ter nome=${nome_valido}`, () => {
            expect(usuario.nome).toBe(nome_valido)
        })
        
    })

    describe.each(nomes_invalidos)(`quando usamos dados invalidos: nome=[%s]`, (nome_invalido) => {

        test('então devera ocorrer um erro', () => {
            const criarUsuario = () => new Usuario(nome_invalido)
            expect(criarUsuario).toThrow('Nome inválido')
        })
    })


})

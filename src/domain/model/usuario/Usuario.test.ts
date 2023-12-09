import ValidationError from '../shared/validation-error/ValidationError'
import Usuario, { UsuarioValidacoes } from './Usuario'

describe('Dado que estamos criando Usuarios', () => {
  const nomesValidos = ['Giuseppe', 'Fulano', 'Ana', 'NomeBugY', ' Beppe', ' Beppe ', 'Beppe ', 'Giuseppe  Matheus']
  const nomesInvalidosTamanhoMinimo = ['', '     ', ' ii ', 'ii', 'j']
  const nomesInvalidosComNumeros = ['Beppe123', '123Beppe', '1234', '983124']
  const nomesInvalidosComSimbolos = ['beppe@mp', '@$!@#-']

  describe.each(nomesValidos)('quando usamos dados obrigatorios: nome=%s', (nomeValido) => {
    const usuario = new Usuario(nomeValido)
    test(`então o usuario criado deve ter nome=${nomeValido}`, () => {
      expect(usuario.nome).toBe(nomeValido.trim().replace(/\s+/g, ' '))
    })
  })

  describe.each(nomesInvalidosTamanhoMinimo)('quando usamos nomes invalidos tamanho: nome=[%s]', (nomeInvalido) => {
    test('então devera ocorrer um erro', () => {
      const criarUsuario = (): Usuario => new Usuario(nomeInvalido)
      expect(criarUsuario).toThrow(UsuarioValidacoes.NOME_TAMANHO_INVALIDO)
      expect(criarUsuario).toThrow(ValidationError)
    })
  })

  describe.each(nomesInvalidosComNumeros)('quando usamos nomes com números ex: nome=[%s]', (nomeInvalido) => {
    const erroEsperadoNomeNumero = UsuarioValidacoes.NOME_CONTEM_NUMEROS

    test(`então devera ocorrer um erro com a mensagem:
                ${erroEsperadoNomeNumero}`, () => {
      const criarUsuario = (): Usuario => new Usuario(nomeInvalido)
      expect(criarUsuario).toThrow(erroEsperadoNomeNumero)
      expect(criarUsuario).toThrow(ValidationError)
    })
  })

  describe.each(nomesInvalidosComSimbolos)('quando usamos nomes com simbolos ex: nome=[%s]', (nomeInvalido) => {
    const erroEsperadoNomeSimbolos = UsuarioValidacoes.NOME_CONTEM_CARACTERES_ESPECIAIS

    test(`então devera ocorrer um erro com a mensagem:
                ${erroEsperadoNomeSimbolos}`, () => {
      const criarUsuario = (): Usuario => new Usuario(nomeInvalido)
      expect(criarUsuario).toThrow(erroEsperadoNomeSimbolos)
      expect(criarUsuario).toThrow(ValidationError)
    })
  })

  const nomeInvalidoTamanhoNumeroSimbolo = ' 1@ '
  describe(`quando usamos nomes invalidos de tamanho, numero e simbolos, ex:  ${nomeInvalidoTamanhoNumeroSimbolo}`, () => {
    test('então devera ocorrer um erro, descrevendo todas as validações', () => {
      const errosEsperados = []
      errosEsperados.push(UsuarioValidacoes.NOME_TAMANHO_INVALIDO)
      errosEsperados.push(UsuarioValidacoes.NOME_CONTEM_NUMEROS)
      errosEsperados.push(UsuarioValidacoes.NOME_CONTEM_CARACTERES_ESPECIAIS)

      const criarUsuario = (): Usuario => new Usuario(nomeInvalidoTamanhoNumeroSimbolo)

      for (const erro of errosEsperados) {
        expect(criarUsuario).toThrow(ValidationError)
        expect(criarUsuario).toThrow(erro)
      }
    })
  })
})

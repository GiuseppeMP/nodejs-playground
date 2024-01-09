import { type PostgreSQLConfig, type GerenciadorConfig, PostgreSQLConfigErrors } from './GerenciadorConfig'
import GerenciadorConfigImpl from './GerenciadorConfigImpl'

const gerenciador: GerenciadorConfig = new GerenciadorConfigImpl()
describe('Testando GerenciadorConfig', () => {
  it('deve retornar o valor de APP_CONFIG_PG', () => {
    // Arrange
    const mockEnv = '{ "host": "localhost_app", "port": 5435, "database": "mock", "user": "mock", "password": "mock" }'

    process.env.APP_CONFIG_PG = mockEnv

    // Act
    const actual: PostgreSQLConfig = gerenciador.getPostgreSQLConfig()

    // Assert
    expect(actual).toBeDefined()
    expect(actual).toEqual({ host: 'localhost_app', port: 5435, database: 'mock', user: 'mock', password: 'mock' })
  })

  describe('Quando o APP_CONFIG_PG estiver invalido', () => {
    test.each(['', '  ', undefined])('deve retornar erro quando for: [%s]', (env) => {
      // Arrange
      if (env === undefined) delete process.env.APP_CONFIG_PG
      else process.env.APP_CONFIG_PG = env

      // Act
      // Assert
      expect(gerenciador.getPostgreSQLConfig).toThrow()
      expect(gerenciador.getPostgreSQLConfig).toThrow('A variável de ambiente APP_CONFIG_PG não está definida.')
    })

    test('deve retornar erro quando for não um JSON válido', () => {
      // Arrange
      process.env.APP_CONFIG_PG = '{ fashdfhasdf }'

      // Act
      // Assert
      expect(gerenciador.getPostgreSQLConfig).toThrow('A variável de ambiente APP_CONFIG_PG não é um JSON válido.')
    })

    test('deve retornar erro quando não alguma informação estiver faltante', () => {
      // Arrange
      const mockEnvTipoInvalido = '{ "host2": "localhost_app", "port2": 5435, "database_2": "mock", "user2": "mock", "password2": "mock" }'

      const errosEsperados = []
      errosEsperados.push(PostgreSQLConfigErrors.MISSING_HOST)
      errosEsperados.push(PostgreSQLConfigErrors.MISSING_PORT)
      errosEsperados.push(PostgreSQLConfigErrors.MISSING_USER)
      errosEsperados.push(PostgreSQLConfigErrors.MISSING_PASSWORD)
      errosEsperados.push(PostgreSQLConfigErrors.MISSING_DATABASE)

      process.env.APP_CONFIG_PG = mockEnvTipoInvalido

      // Act
      // Assert
      for (const erro of errosEsperados) {
        expect(gerenciador.getPostgreSQLConfig).toThrow(erro)
      }
    })
  })
})

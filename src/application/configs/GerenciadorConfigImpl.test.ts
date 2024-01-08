import { type PostgreSQLConfig, type GerenciadorConfig } from './GerenciadorConfig'
import GerenciadorConfigImpl from './GerenciadorConfigImpl'

describe('Testando GerenciadorConfig', () => {
  it('deve retornar o valor de APP_CONFIG_PG', () => {
    // Arrange
    const gerenciador: GerenciadorConfig = new GerenciadorConfigImpl()

    const mockEnv = '{ "host": "localhost_app", "port": 5435, "database": "mock", "user": "mock", "password": "mock" }'

    process.env.APP_CONFIG_PG = mockEnv

    // Act
    const actual: PostgreSQLConfig = gerenciador.getPostgreSQLConfig()

    // Assert
    expect(actual).toBeDefined()
    expect(actual).toEqual({ host: 'localhost_app', port: 5435, database: 'mock', user: 'mock', password: 'mock' })
  })

  describe('Quando o APP_CONFIG_PG estiver invalido', () => {
    test('deve retornar erro quando for não definido', () => {
      // Arrange
      const gerenciador: GerenciadorConfig = new GerenciadorConfigImpl()

      process.env.APP_CONFIG_PG = ''

      // Act
      // Assert
      expect(gerenciador.getPostgreSQLConfig).toThrow()
      expect(gerenciador.getPostgreSQLConfig).toThrow('A variável de ambiente APP_CONFIG_PG não está definida.')
    })

    test('deve retornar erro quando for não um JSON válido', () => {
      // Arrange
      const gerenciador: GerenciadorConfig = new GerenciadorConfigImpl()

      process.env.APP_CONFIG_PG = '{ fashdfhasdf }'

      // Act
      // Assert
      expect(gerenciador.getPostgreSQLConfig).toThrow('A variável de ambiente APP_CONFIG_PG não é um JSON válido.')
    })

    test.todo('deve retornar erro quando não atender o type PostgreSQLConfig')
    test.todo('deve retornar erro quando database for vazio.')
    test.todo('deve retornar erro quando user for vazio.')
    test.todo('deve retornar erro quando password for vazio.')
    test.todo('deve retornar erro quando port for vazio.')
    test.todo('deve retornar erro quando host for vazio.')
  })
})

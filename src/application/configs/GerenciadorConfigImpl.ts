import { type PostgreSQLConfig, type GerenciadorConfig } from './GerenciadorConfig'

export default class GerenciadorConfigImpl implements GerenciadorConfig {
  getPostgreSQLConfig (): PostgreSQLConfig {
    const env = process.env.APP_CONFIG_PG?.toString()

    if (env !== undefined && env.trim().length > 0) {
      try {
        return JSON.parse(env)
      } catch (error) {
        throw new Error('A variável de ambiente APP_CONFIG_PG não é um JSON válido.')
      }
    }

    throw new Error('A variável de ambiente APP_CONFIG_PG não está definida.')
  }
}

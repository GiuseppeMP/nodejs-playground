import { type PostgreSQLConfig, type GerenciadorConfig, PostgreSQLConfigErrors } from './GerenciadorConfig'

function validarConfig ({ host, port, database, user, password }: PostgreSQLConfig): PostgreSQLConfig {
  const erros = []

  if (host === undefined) {
    erros.push(PostgreSQLConfigErrors.MISSING_HOST)
  }
  if (port === undefined) {
    erros.push(PostgreSQLConfigErrors.MISSING_PORT)
  }
  if (database === undefined) {
    erros.push(PostgreSQLConfigErrors.MISSING_DATABASE)
  }
  if (user === undefined) {
    erros.push(PostgreSQLConfigErrors.MISSING_USER)
  }
  if (password === undefined) {
    erros.push(PostgreSQLConfigErrors.MISSING_PASSWORD)
  }

  if (erros.length > 0) throw new Error(erros.join())

  return { host, port, database, user, password }
}

export default class GerenciadorConfigImpl implements GerenciadorConfig {
  getPostgreSQLConfig (): PostgreSQLConfig {
    const env = process.env.APP_CONFIG_PG?.toString()

    let config: PostgreSQLConfig
    if (env !== undefined && env.trim().length > 0) {
      try {
        config = JSON.parse(env) as PostgreSQLConfig
      } catch (error) {
        throw new Error('A variável de ambiente APP_CONFIG_PG não é um JSON válido.')
      }

      config = validarConfig(config)

      return config
    }

    throw new Error('A variável de ambiente APP_CONFIG_PG não está definida.')
  }
}

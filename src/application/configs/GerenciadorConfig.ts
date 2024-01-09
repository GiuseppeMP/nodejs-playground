export interface PostgreSQLConfig {
  host: string
  port: number
  user: string
  password: string
  database: string
}

export interface GerenciadorConfig {
  getPostgreSQLConfig: () => PostgreSQLConfig
}

export enum PostgreSQLConfigErrors {
  MISSING_DATABASE = 'A env:APP_CONFIG_PG está sem o campo database.',
  MISSING_USER = 'A env:APP_CONFIG_PG está sem o campo user.',
  MISSING_PASSWORD = 'A env:APP_CONFIG_PG está sem o campo password.',
  MISSING_PORT = 'A env:APP_CONFIG_PG está sem o campo port.',
  MISSING_HOST = 'A env:APP_CONFIG_PG está sem o campo host.',
}

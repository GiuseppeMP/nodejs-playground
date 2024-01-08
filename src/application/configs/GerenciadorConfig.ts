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

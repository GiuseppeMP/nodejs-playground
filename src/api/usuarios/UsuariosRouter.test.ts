import { type Router } from 'express'
import router from './UsuariosRouter'

// TODO deve existir uma lib expressjs + jest
// TODO Expressjs não é mt legal de testar
function estaRotaEstaRegistrada (router: Router, path: string, verbo: string): boolean {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  return router.stack.some(route => (route.route) && route.route.path === path && route.route.methods[verbo])
}

test('Testando router /usuarios', () => {
  expect(router).toBeDefined()
  expect(estaRotaEstaRegistrada(router, '/usuarios', 'post')).toBeTruthy()
})

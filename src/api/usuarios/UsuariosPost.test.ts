/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { type Request, type Response } from 'express'

import usuariosPost from './UsuariosPost'
import Usuario from '../../domain/model/usuario/Usuario'

const req = { body: { nome: 'beppe' } } as Request
const res = { } as Response
res.status = jest.fn()
res.json = jest.fn(() => res)

describe('Testando /usuarios', () => {
  test('[POST]', () => {
    usuariosPost(req, res)
    expect(res.json).toHaveBeenCalled()
    expect(res.json).toHaveBeenCalledWith(new Usuario(req.body.nome as string))
    expect(res.status).toHaveBeenCalled()
  })
})

import { type Request, type Response } from 'express'
import Usuario from '../../domain/model/usuario/Usuario'

export default function usuariosPost (req: Request, res: Response): void {
  res.json(new Usuario(req.body.nome as string)).status(200)
}

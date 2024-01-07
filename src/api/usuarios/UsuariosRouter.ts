import express from 'express'
import usuariosPost from './UsuariosPost'

const router = express.Router()

router.post('/usuarios', usuariosPost)

export default router

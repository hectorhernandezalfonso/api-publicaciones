// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Publicaciones from 'App/Models/Publicaciones'

export default class PublicacionesController {
	async setRegistroPublicaciones({request, response}: HttpContextContract){
		try{
			const dataPublicaciones = request.only([
			'codigo_publicacion', 'codigo_usuario', 'titulo', 'cuerpo'
			])
			const codigoPublicacion = dataPublicaciones.codigo_publicacion
			const codigoPublicacionExistente: Number = await this.getValidarPublicacionExistente(codigoPublicacion)
			if (codigoPublicacionExistente === 0){
				await Publicaciones.create(dataPublicaciones)
				response.status(200).json({"msg": "Registro de la publicacion completado"})
			}else{
				response.status(400).json({"msg": "Error, el codigo de la publicacion ya esta registrado"})
			}
		} catch (error){
			response.status(500).json("msg":"error en el servidor")
		}
	}


	private async getValidarPublicacionExistente(codigo_publicacion:Number): Promise<Number>{
		const total = await Publicaciones.query().where({"codigo_publicacion": codigo_publicacion}).count('*').from('publicaciones')
		return parseInt(total[0]["count(*)"])
	}
}

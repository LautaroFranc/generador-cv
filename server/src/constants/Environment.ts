// El siguiente codigo carga las variables alojadas en archivo .env
import oDotEnv from 'dotenv'

oDotEnv.config();   
// Asigna el archivo .env a una constante para su mejor manipulacion
const oEnviroment = process.env;
/**
 * Archivo de constantes de configuracion del proyecto
 */

export const  URL_API= '/'
export const URL_PUBLIC= oEnviroment.URL_PUBLIC
export const  DEBUG= oEnviroment.DEBUG
export const  PORT= oEnviroment.PORT
export const  OPENAI_API_KEY= oEnviroment.OPENAI_API_KEY
export const  GENERAL_MESSAGE_ERROR= 'Ah ocurrido un error, por favor intente de nuevo más tarde.'
export const  GENERAL_MESSAGE_NOT_FOUND= 'No se encontro registro con ese identificador'
export const  GENERAL_MESSAGE_NOT_VALID= 'Parámetros no válidos'
export const  GENERAL_MESSAGE_UNAUTHORIZED= 'Unauthorized'


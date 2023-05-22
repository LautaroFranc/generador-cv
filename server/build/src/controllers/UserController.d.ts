import { Request, Response } from 'express';
import Controller from "./Controller";
export default class UserController extends Controller {
    handleError(oResponse: Response, oException: unknown): void;
    constructor();
    /**
     * Función de login, se toman los datos del usuario, se comprueba que los mismos sean correctos y se genera una nueva api token.
     *
     * @param {Request} oRequest Request de la peticion, aqui se reciben las credenciales del usuario
     * @param {Response} oResponse Este objeto maneja el response de la solicitud
     *
     */
    generatorAbout: (oRequest: Request, oResponse: Response) => Promise<void>;
    FormCv: (oRequest: Request, oResponse: Response) => Promise<void>;
}

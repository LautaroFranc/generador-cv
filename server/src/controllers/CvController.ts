import { DONE, CONFLICT, NOT_VALID, NOT_FOUND } from "../constants/StatusCode";
import { Request, Response } from 'express';
import Controller from "./Controller";
import { iABardPrompt } from "../util/iABard";
import { Packer } from "docx";
import { DocumentCreator } from "../template/createCv";


export default class UserController extends Controller {
  handleError(oResponse: Response, oException: unknown) {
    throw new Error("Method not implemented.");
  }
  constructor() {
    super();
  }

  /**
   * Función de login, se toman los datos del usuario, se comprueba que los mismos sean correctos y se genera una nueva api token.
   *
   * @param {Request} oRequest Request de la peticion, aqui se reciben las credenciales del usuario
   * @param {Response} oResponse Este objeto maneja el response de la solicitud
   *
   */

  generatorAbout = async (oRequest: Request, oResponse: Response) => {
    const data: any = oRequest.body;
    try {
      const iAbout = await (data?.about && iABardPrompt(data.prompt, data.about));

      let text = iAbout.split("\n");
      text.shift();
      text=text.join("").split(">").join("").split('"""').join("");

      return this.respond(oResponse, DONE, {
        message: "success",
        data: text,
      } as any);
    } catch (oException) {
      console.log(oException);
      return this.handleError(oResponse, oException);
    }
  };

  FormCv = async (oRequest: Request, oResponse: Response) => {
    try {
    const {experiences, educations, skills, languages, infoUser, projects, tools, db} =oRequest.body ;
    const documentCreator = new DocumentCreator();
    const doc = documentCreator.create([experiences, educations, skills, languages, infoUser, projects, tools, db]);
    const b64string = await Packer.toBase64String(doc);
  
    oResponse.setHeader('Content-Disposition', 'attachment; filename=My_cv.docx');
    const buff = Buffer.from(b64string, 'base64');
    return this.respond(oResponse, DONE,  buff);

    } catch (oException) {
      return this.handleError(oResponse, oException);
    }
  };

}

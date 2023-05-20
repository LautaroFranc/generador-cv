import { DONE, CONFLICT, NOT_VALID, NOT_FOUND } from "../constants/StatusCode";
import { Request, Response } from 'express';

import Controller from "./Controller";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import { iABardPrompt } from "../util/iABard";
import fs from 'fs';
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
      const data: any = oRequest.body;
      const content = readFileSync(
        resolve(__dirname, "../template/CV-Template.docx"),
        "binary"
      );
      const zip = new PizZip(content);
      const doc = new Docxtemplater(zip, { paragraphLoop: true });
      doc.setData(data);
      doc.render();
      const buf = doc.getZip().generate({
        type: "nodebuffer",
      });
      const fileUrl = `${oRequest.protocol}://${oRequest.get("host")}/public/output.docx`;
    
      return this.respond(oResponse, DONE, {
        message: "success",
        data: fileUrl,
      } as any);
    } catch (oException) {
      console.log(oException);
      return this.handleError(oResponse, oException);
    }
  };
 
}

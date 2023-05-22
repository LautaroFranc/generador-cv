import { GENERAL_MESSAGE_NOT_FOUND, GENERAL_MESSAGE_NOT_VALID, GENERAL_MESSAGE_UNAUTHORIZED, GENERAL_MESSAGE_ERROR, DEBUG } from '../constants/Environment';
import { NOT_FOUND, NOT_VALID, PERMISSIONS } from '../constants/StatusCode';
import {Response,Request } from 'express';


var Controller = class Controller {

  constructor() { }

  respond = (oResponse: Response, nStatusCode: number, oData: any|null = null, oException: string | object |null= null) => {
    oResponse.status(nStatusCode);
    if (oData == null)
      switch (nStatusCode) {
        case NOT_FOUND:
          oData = { message: GENERAL_MESSAGE_NOT_FOUND };
          break;
        case NOT_VALID:
          oData = { message: GENERAL_MESSAGE_NOT_VALID };
          break;
        case PERMISSIONS:
          oData = { message: GENERAL_MESSAGE_UNAUTHORIZED };
          break;
        default:
          oData = { message: GENERAL_MESSAGE_ERROR };
          break;
      }
    if (DEBUG && oException !== null)
     // @ts-ignore: <error-code>
      oData['debug'] = oException;
      oResponse.json(oData);
  }


}

export default Controller;
import { Router,Response,Request } from 'express';
const oRouter = Router();

oRouter.post('/',(oRequest: Request, oResponse: Response) => {
  oResponse.status(200).json({
    message: 'Success',
    routers:`
      /generatorAbout
      /extract
    `
  })
});

export default oRouter
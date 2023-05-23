import { Router,Response,Request } from 'express';
const oRouter = Router();

oRouter.get('/',(oRequest: Request, oResponse: Response) => {
  oResponse.status(200).json({
    message: 'Success',
    routers:[
      '☁️/generatorAbout > post',
      '☁️/generateCV > post',
      '☁️/viewCV > get'
      ]
  })
});

export default oRouter

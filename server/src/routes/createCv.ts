import { Router,Response,Request } from 'express';
import UserController from '../controllers/UserController'; 
import { upload } from '../middleware/AuthMiddleware';
const oRouter = Router();


const Controllers = new UserController();

oRouter.post('/extract',upload.single("file") , (oRequest: Request, oResponse: Response) => {
  Controllers.FormCv(oRequest, oResponse);
});

oRouter.post('/generatorAbout',(oRequest: Request, oResponse: Response) => {

  Controllers.generatorAbout(oRequest, oResponse);
});

export default oRouter

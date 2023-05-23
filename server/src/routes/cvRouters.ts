import { Router,Response,Request } from 'express';
import UserController from '../controllers/CvController'; 
// import { upload } from '../middleware/AuthMiddleware';
const oRouter = Router();


const Controllers = new UserController();
oRouter.post('/generateCv', (oRequest: Request, oResponse: Response) => {
  Controllers.FormCv(oRequest, oResponse);
});
oRouter.get('/viewCv/:_id', (oRequest: Request, oResponse: Response) => {
  Controllers.ViewCv(oRequest, oResponse);
});
oRouter.post('/generatorAbout',(oRequest: Request, oResponse: Response) => {
  Controllers.generatorAbout(oRequest, oResponse);
});

export default oRouter

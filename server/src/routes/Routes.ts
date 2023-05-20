import { URL_API } from '../constants/Environment'; 
import { upload} from '../middleware/AuthMiddleware'; 
import routes  from './createCv'
export default function (oApp:any) {
  // // Routes without authentication
    oApp.use(`${URL_API}`, routes);
}; 
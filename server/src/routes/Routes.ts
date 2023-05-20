import { URL_API } from '../constants/Environment'; 
import { upload} from '../middleware/AuthMiddleware'; 
import routes  from './cvRouters'
export default function (oApp:any) {
  // // Routes without authentication
    oApp.use(`${URL_API}`, routes);
}; 
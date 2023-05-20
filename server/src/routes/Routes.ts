import { URL_API } from '../constants/Environment'; 
import { upload} from '../middleware/AuthMiddleware'; 
import routesCv  from './cvRouters'
import routesStart  from './startServer'
export default function (oApp:any) {
  // // Routes without authentication
    oApp.use(`${URL_API}`, routesCv);
    oApp.use(`${URL_API}`, routesStart);
}; 
import express from 'express';
const app = express();
import cors from 'cors';
import oMorgan from 'morgan'
import { DEBUG, PORT } from './src/constants/Environment';
import pkg from 'body-parser';
import oRoutes from './src/routes/Routes';
import path from 'path';
const { json } = pkg;

// use the modules
app.use(cors({ origin: '*', methods: ['GET', 'POST', 'DELETE'], allowedHeaders: ['Content-Type', 'authorization'] }));
app.use(json());  

if (DEBUG) {  
  app.use(oMorgan('dev'));
}

app.use(`/public`, express.static(path.join(__dirname, "public")));

// Se levanta el servidor
app.listen(PORT, () => console.log(`Server started, listening port: ${PORT}`));

// Se inicializan las rutas
oRoutes(app);
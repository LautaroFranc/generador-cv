import { connect } from 'mongoose';

// Configuración de la conexión a la base de datos
const url = 'mongodb+srv://marcel:Subarashi123@music.r3nznbu.mongodb.net/archive'; // Cambiar por la URI de tu base de datos MongoDB

// Conexión a la base de datos

(async ()=>{
 const db = await connect(url);
  console.log(
    'DB connect '+
    db.connection.name
  );
  
})()

